# ProtractorAssignment
Install Protractor:-
Download Visual Studio Code:
You can download Visual Studio code from URL “https://code.visualstudio.com/download” by selecting the right platform.

Protractor Node Modules help to build the automation framework using the protractor API. Open the terminal window again and type the command:

npm install ––save protractor

Install Jasmine 
Protractor framework uses Jasmine Assertion libraries in spec files. To install this package open terminal and type command:

npm install ––save jasmine

Install Type definition for Jasmine 
Installing Type Definitions for Jasmine helps in autocomplete suggestions. These pre-defined type definition files contain information like what are the functions available, what parameters it takes. VS Code uses all this information for auto-suggestion. To install this package open terminal and type command:

npm install ––save @types/jasmine

Install Type definitions for Node 
This package contains Type Definitions for NodeJS, This provides the auto-suggestions for classes. To install this package type the following command in terminal:

npm install ––save @types/node

Install spec reporter 
Installing Spec Reporter package provides us real-time test results on the console. To install this package type command:

npm install ––save jasmine-spec-reporter

Protractor HTML reporter (Optional)
This package helps to generate beautiful HTML result. This can be installed by typing the following command in terminal:

npm install ––save protractor-html-reporter-2

Maintain Protractorconf.js file like given in Project.

#To Execute the Project after all Installations :-
protractor protractor.conf.js

