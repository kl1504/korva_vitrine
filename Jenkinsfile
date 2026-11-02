pipeline {
    agent none // Défini individuellement par stage si nécessaire

    environment {
        REGISTRY        = 'registry.local:5000'
        IMAGE_NAME      = 'korva-website'
        // Utilise l'ID du commit Git court ou long comme tag
        IMAGE_TAG       = "${GIT_COMMIT}"
        
        // Récupération des secrets configurés dans Jenkins Credentials
        SONAR_TOKEN      = credentials('SONAR_TOKEN')
        REGISTRY_USER    = credentials('REGISTRY_USER')
        REGISTRY_PASSWORD= credentials('REGISTRY_PASSWORD')
        COSIGN_KEY       = credentials('COSIGN_KEY')
        COSIGN_PASSWORD  = credentials('COSIGN_PASSWORD')
        MAIL_SERVER      = credentials('MAIL_SERVER')
        MAIL_PORT        = credentials('MAIL_PORT')
        MAIL_USERNAME    = credentials('MAIL_USERNAME')
        MAIL_PASSWORD    = credentials('MAIL_PASSWORD')
        MAIL_TO          = credentials('MAIL_TO')
        MAIL_FROM        = credentials('MAIL_FROM')
    }

    stages {
        stage('Security Scan') {
            agent { label 'self-hosted' }
            steps {
                echo 'Running Gitleaks detection...'
                sh 'docker run --rm -v $(pwd):/path zricetheory/gitleaks:latest detect --source=/path --verbose --redact'
                
                echo 'Running SonarQube Scan...'
                sh 'docker run --rm -v "$(pwd):/usr/src" -e SONAR_TOKEN="${SONAR_TOKEN}" sonarsource/sonar-scanner-cli:6.2 sonar-scanner'
            }
        }

        stage('Build & Sign') {
            agent { label 'self-hosted' }
            steps {
                sh 'docker login -u "${REGISTRY_USER}" -p "${REGISTRY_PASSWORD}" "${REGISTRY}"'
                
                echo 'Checking if the tests pass...'
                sh 'docker compose run --rm korva-vitrine npm test --if-present'
                
                echo 'Building and pushing the Docker image...'
                sh 'docker build -t "${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}" .'
                sh 'docker push "${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"'
                
                echo 'Signing the image with Cosign...'
                sh """
                    echo "${COSIGN_KEY}" > cosign.key
                    docker run --rm -v \$(pwd):/app -w /app sigstore/cosign:v2.2.3 sign --yes --key cosign.key --password "${COSIGN_PASSWORD}" "${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
                    rm -f cosign.key
                """
            }
        }

        stage('Image Scan') {
            agent { label 'self-hosted' } // Utilise Trivy via Docker sur le node
            steps {
                echo 'Scanning image with Trivy...'
                sh """
                    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
                    -v \$(pwd):/root/.cache/ aquasecurity/trivy:latest image \
                    --severity CRITICAL,HIGH --ignore-unfixed --format sarif --output /root/.cache/trivy-report.sarif \
                    ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}
                """
            }
            post {
                success {
                    // Sauvegarde du rapport dans Jenkins
                    archiveArtifacts artifacts: 'trivy-report.sarif', fingerprint: true
                }
            }
        }

        stage('Deploy') {
            agent { label 'self-hosted' }
            steps {
                echo 'Starting Docker Containers...'
                sh "IMAGE_TAG=${IMAGE_TAG} docker compose up -d"
                
                sleep time: 10, unit: 'SECONDS'
                
                echo 'Validating access...'
                script {
                    def runnerIp = sh(script: "hostname -I | awk '{print \$1}'", returnStdout: true).trim()
                    echo "Website available at http://${runnerIp}:8085"
                    sh "curl -v http://${runnerIp}:8085"
                }
                
                echo 'Docker Clean Up...'
                sh 'docker image prune -f'
            }
        }

        stage('DAST Scan') {
            agent { label 'self-hosted' }
            steps {
                echo 'Running OWASP ZAP...'
                sh """
                    mkdir -p zap-wrk
                    docker run --rm -v \$(pwd)/zap-wrk:/zap/wrk:rw -t owasp/zap2docker-stable:latest zap-full-scan.py \
                    -t http://172.20.20.23:8085 -a -r report_html.html || true
                """
                
                echo 'Converting report to PDF...'
                sh """
                    sudo apt-get update && sudo apt-get install -y wkhtmltopdf
                    wkhtmltopdf --enable-local-file-access zap-wrk/report_html.html zap-vulnerability-report.pdf
                """
            }
            post {
                success {
                    archiveArtifacts artifacts: 'zap-vulnerability-report.pdf', fingerprint: true
                }
            }
        }
    }

    post {
        always {
            // Plugin Jenkins "Email Extension" requis pour cette étape
            emailext (
                subject: "Security Reports regarding the project Korva",
                to: "${MAIL_TO}",
                from: "KORVA Deployment Team <${MAIL_FROM}>",
                body: """Hello Team,

Please find attached the latest security reports for the Korva project.

1. Trivy Vulnerability Report (SARIF format)
2. OWASP ZAP Dynamic Analysis Report (PDF format)

Best regards,
Kael Avande,
KORVA Deployment Team""",
                attachmentsPattern: 'trivy-report.sarif, zap-vulnerability-report.pdf'
            )
        }
    }
}
