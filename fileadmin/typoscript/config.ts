config.headerComment (
© 2014 VOBI
W: http://vobi.si
@: info@vobi.si
)

config {
  no_cache = {$common.noCache}

  spamProtectEmailAddresses = 2
  spamProtectEmailAddresses_atSubst = @

  xhtml_cleaning = output
  xmlprologue = none

  renderCharset = utf-8
  metaCharset = utf-8

  simulateStaticDocuments = 0
  baseURL = http://{$domain}/
  tx_realurl_enable = 1

  linkVars = L
  uniqueLinkVars = L
  sys_language_overlay = hideNonTranslated
  language = si
  htmlTag_langKey = sl-SI
  locale_all  = sl_SI.UTF-8
  sys_language_uid = 0

  doctype = html5
  disablePrefixComment = 1
  renderCharset = utf-8
  metaCharset = utf-8

  concatenateJs = {$common.production}
  concatenateCss = {$common.production}
  compressJs = {$common.production}
  compressCss = {$common.production}

  #source optimisation
  sourceopt.enabled = {$common.production}
  sourceopt.removeBlurScript = 1
  sourceopt.removeGenerator = 1
  sourceopt.formatHtml = 1

  #remove TYPO3 defaults
  removeDefaultJS = 1
  removeDefaultCSS = 1
  disableBaseWrap = 1
}

//to clean up TYPO3 wraps
tt_content.stdWrap.innerWrap >
lib.stdheader.stdWrap.dataWrap >

//responsive images
tt_content.image.20.1.params = class="img-responsive"