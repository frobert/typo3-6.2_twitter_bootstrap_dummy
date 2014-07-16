page = PAGE
page {
  typeNum = 0
  10 = FLUIDTEMPLATE
  10 {
    partialRootPath = fileadmin/templates/partials/
    layoutRootPath = fileadmin/templates/layouts/
    file.stdWrap.cObject = CASE
    file.stdWrap.cObject {
      key.data = levelfield:-1, backend_layout_next_level, slide
      key.override.field = backend_layout
      default = TEXT
      default.value = fileadmin/templates/main.html
      2 = TEXT
      2.value = fileadmin/templates/sub.html
    }
    variables {
      content < styles.content.get
      content.select.where = colPos=0

      jumbo < styles.content.get
      jumbo.select.where = colPos=1

      leftColumn < styles.content.get
      leftColumn.select.where = colPos=1
    }

  }
}

### META
page.meta {

  apple-mobile-web-app-capable = {$plugin.meta.apple-mobile-web-app-capable}
  apple-mobile-web-app-status-bar-style = {$plugin.meta.apple-mobile-web-app-status-bar-style}
  apple-mobile-web-app-title = {$plugin.meta.apple-mobile-web-app-title}
  viewport = {$plugin.meta.viewport}
  cleartype = {$plugin.meta.cleartype}
  MobileOptimized = {$plugin.meta.MobileOptimized}

  robots = {$plugin.meta.robots}
  revisit = {$plugin.meta.revisit}
  copyright = {$plugin.meta.copyright}

  google-site-verification = {$plugin.meta.googleVerify}
}

###favicon
#page.shortcutIcon = fileadmin/templates/img/favicon.png{$common.rand}

###CSS
page.includeCSS {
  twitterBootstrap = //maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css
  twitterBootstrap.excludeFromConcatenation = 1
  twitterBootstrap.disableCompression = 1

  twitterBootstrapTheme = //maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css
  twitterBootstrapTheme.excludeFromConcatenation = 1
  twitterBootstrapTheme.disableCompression = 1

  main = fileadmin/templates/css/main.css
}

###JS
page {

  includeJS {
  
  }

  includeJSFooter {
    jQuery = //ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
    jQuery.forceOnTop = 1
    jQuery.excludeFromConcatenation = 1
    jQuery.disableCompression = 1

    twitterBootstrap = //maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js
    twitterBootstrap.excludeFromConcatenation = 1
    twitterBootstrap.disableCompression = 1

    main = fileadmin/templates/js/main.js
  }

  headerData {

    //facebook meta
    3000 = TEXT
    3000.field = title
    3000.wrap = <meta property="og:title" content = "|" />

    3001 = TEXT
    3001.value = <meta property="og:site_name" content="VOBI"/>

    3002 = TEXT
    3002.field = description
    3002.wrap = <meta property="og:description" content="|" />

    3003 = TEXT
    3003.value = <meta property="og:image" content="http://{$domain}/fileadmin/templates/img/fb_logo.jpg"/>

    3004 = TEXT
    3004.value= <meta property="og:type" content="company" />

    3005 = TEXT
    3005.value = <meta property="fb:admins" content="" />

    3006 = TEXT
    3006.data = getIndpEnv:TYPO3_REQUEST_URL
    3006.wrap= <meta property="og:url" content="|" />

  }

##msie
[browser= msie] && [version=  <9]
page {
  includeJS {
    html5shiv = //oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js
    html5shiv.excludeFromConcatenation = 1
    html5shiv.disableCompression = 1

    respond = //oss.maxcdn.com/respond/1.4.2/respond.min.js
    respond.excludeFromConcatenation = 1
    respond.disableCompression = 1
  }
}
[GLOBAL]

#browser happy for old ies
[browser = msie] && [version= < 8]
page >
page = PAGE
page.10 = TEXT
page.10.value (
<iframe src="http://browsehappy.com/" width="100%" height="100%" frameborder=0 scrolling="no"></iframe>
)
[GLOBAL]