define({ "api": [
  {
    "type": "get",
    "url": "/aws/start-server",
    "title": "Start Server",
    "description": "<p>Start a CsGo server on AWS, create a key pair to access it, and attach a valid security group to it.</p>",
    "name": "Start_Server",
    "group": "Server_Management",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "steam_server_token",
            "description": "<p>This needs to be generated for your steam account. Navigate to <code>https://steamcommunity.com/dev/managegameservers</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hostname",
            "description": "<p>Your server name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rcon_password",
            "description": "<p>You will use this password in CsGo console to log on as server admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sv_password",
            "description": "<p>Server password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aws_region",
            "description": "<p>Pass the region code, where you want to start your server (closest to you will give you best ping.) List of regions here <code>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"steam_server_token\" : \"725FDDC220F092DF860826BBD2D71D43\",\n      \"hostname\" : \"deadfox server\",\n      \"rcon_password\": \"rcon_pass_1\",\n      \"sv_password\" : \"sv_pass_1\",\n      \"aws_region\" : \"ap-south-1\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Response object with following two keys.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.instance_id",
            "description": "<p>AWS instance ID of server you just started. Better if you note it down. Can be see in AWS console as well, navigate here after you login to AWS <code>https://ap-south-1.console.aws.amazon.com/ec2/v2/home#Instances:instanceState=running;sort=instanceId</code>. Select the correct region from top right, if you don't see a running server.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.private_key",
            "description": "<p>This private key is used to access your server via ssh. This should be noted down.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "response_code",
            "description": "<ol start=\"200\"> <li></li> </ol>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response_message",
            "description": "<p>Empty or error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": \"success\",\n     \"response_code\": 200,\n     \"response_message\": \"\",\n     \"data\": {\n         \"instance_id\": \"i-xxxxxxxxxxxxxxxxx\",\n         \"private_key\": \"-----BEGIN RSA PRIVATE KEY----xxx-----END RSA PRIVATE KEY-----,\n         \"message\" : \"\"Please note down the instance id and private key for future references .............\"\n      }\n\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": \"success\"\n     \"response_code\": 200\n     \"response_message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../CsGo-OnDemand/app/awsRoutes.js",
    "groupTitle": "Server_Management",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Error\n{\n  \"status\": \"error\"\n  \"response_code\": 403\n  \"response_message\": \"There was an error performing the action. Please try again\"\n}",
          "type": "json"
        },
        {
          "title": "Missing Param:",
          "content": "HTTP/1.1 400 Missing Param\n{\n  \"response_code\": 400\n  \"response_message\": [\n             \"One or more request parameters missing\"\n     ]\n}",
          "type": "json"
        }
      ]
    }
  }
] });
