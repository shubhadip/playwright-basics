
module.exports = {
    "ci": {
      "preset": "lighthouse:recommended",
      "collect": {
        "chromePath": false,
        "numberOfRuns": 1,
        "settings": {
          "chromeFlags": "--no-sandbox --headless"
        }
      },
      "assert": {
        "assertions": {
          "largest-contentful-paint": [
            "warn",
            {
              "maxNumericValue": 3000
            }
          ],
          "first-contentful-paint": [
            "warn",
            {
              "maxNumericValue": 1200
            }
          ],
          "categories:performance": [
            "warn",
            {
              "minScore": 0.9
            }
          ],
          "categories:accessibility": [
            "warn",
            {
              "minScore": 0.9
            }
          ],
          "categories:best-practices": [
            "warn",
            {
              "minScore": 0.2
            }
          ],
          "categories:seo": [
            "error",
            {
              "minScore": 0.2
            }
          ]
        }
      }
    }
  }