{

  "host": "0.0.0.0",
  "port": 80,

  "keyLength": 10,

  "maxLength": 1000000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 500,
        "every": 60000
      }
    }
  },

  "storage": {
    "path": "./haste-data",
    "type": "file"
  },

  "documents": {
    "about": "./about.md"
  }

}
