import React from 'react'

const GoogleAnalytics = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-6852843-2"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-6852843-2');
        </script>
        `
      }}
    />
  )
}

export default GoogleAnalytics
