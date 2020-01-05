// Integrate GDPR cookie consent
// Using the free version of Cookiehub (https://www.cookiehub.com/)

import React from 'react'

const CookieConsent = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-6852843-1"></script>
        <script type="text/javascript">
        var gtagId = 'UA-6852843-1';
        window['ga-disable-' + gtagId] = true;
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        </script>
        <script src="https://cookiehub.net/cc/4b4f3f7d.js"></script>
        <script type="text/javascript">
        window.addEventListener("load", function() {
        window.cookieconsent.initialise({
          onInitialise: function(status) {
            if (this.hasConsented('analytics')) {
              window['ga-disable-UA-6852843-1'] = false;
              gtag('config', gtagId);
            }
          },
          onAllow: function(category) {
            if (category == 'analytics') {
              window['ga-disable-UA-6852843-1'] = false;
              gtag('config', gtagId);
            }
          },
          onRevoke: function(category) {
            if (category == 'analytics') {
              window['ga-disable-UA-6852843-1'] = true;
            }
          }
        })
        });
        </script>
        `
      }}
    />
  )
}

export default CookieConsent
