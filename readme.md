## _FLEXION CODING CHALLENGE_
##### Prerequisites -
  - JDK 1.8 or higher
  - Intellij IDE or Eclipse
  - Node
  - Angular CLI
  - Maven latest
##### Steps to run the Application -
  - Clone the github repository with command `git clone <REPO_URL>`
  - For backend setup, open the ConversionOfUnit folder in intellij or eclipse.
  - Inside intellij: **Edit configuration** --> **add new maven configuration** --> write `spring-boot:run` in command line agrument.
  - Or you can just run `mvn clean install` and `mvn spring-boot:run` in terminal.
  - Now change directory and navigate inside the flexion-frontend folder "cd flexion-frontend".
  - Run "npm install" using terminal.
  - To run the frontend application run "ng serve" in the terminal.
  - Open browser and hit the URL "http://localhost:4200".
##### List of future development tasks -
  - Implement a basic continuous integration/continuous deployment (CI/CD) pipeline for the code.
  - Increasing scope of the application by providing more units for conversions.
  - Add a history feature so that the previous conversions can be viewed.
  - Using serverless.
  - Improving code coverage. 