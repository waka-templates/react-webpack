/**
 * Created by pomy on 07/02/2017.
 */

'use strict';

module.exports = {
    "prompts": {
        "name"       : {
            "type"    : "string",
            "required": true,
            "message" : "Project name"
        },
        "version"     : {
            "type"    : "string",
            "message" : "Project version",
            "default" : "1.0.0"
        },
        "description": {
            "type"    : "string",
            "required": false,
            "message" : "Project description",
            "default" : "A new React project"
        },
        "author"     : {
            "type"   : "string",
            "message": "Author"
        },
        "router": {
            "type": "confirm",
            "message": "Need react-router(3.0.2)?"
        },
        "test": {
            "type": "confirm",
            "message": "Setup unit tests with Jest + Enzyme?"
        }
    },
    "filters":{
        "__tests__/**/*": "test",
        "config/test.env.js": "test"
    },
    "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev\n\nDocumentation can be found at https://github.com/waka-templates/react-webpack"
}