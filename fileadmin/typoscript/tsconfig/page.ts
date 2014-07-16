mod.SHARED{
  defaultLanguageFlag = si
  defaultLanguageLabel = Slovensko
}

#RTE
RTE {
  classesAnchor {
    internalLink >
    externalLink >
    externalLinkInNewWindow >
    internalLinkInNewWindow >
    download >
    mail >

  }

  default {
    showButtons (
          class,
          textstyle, image, undo, redo,
          formatblock, bold, italic, subscript, superscript,
          orderedlist, unorderedlist, outdent, indent, textindicator,
          insertcharacter, link, unlink, table, tableproperties, findreplace, chMode, removeformat,
          toggleborders,rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit,
          columninsertbefore, columninsertafter, columndelete, columnsplit,
          cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge,
          underline, strikethrough, left, center, right, justifyfull, removeformat, copy, cut, paste
    )

    buttons {
      formatblock {
        removeItems = aside, address, article, div, footer, header, pre, blockquote, section, nav
      }
      link.relAttribute.enabled = 1
    }

    ignoreMainStyleOverride = 1
    showTagFreeClasses = 1
    disableColorPicker = 0

  }
}

#TCE
TCEFORM.tt_content.header_layout {
    altLabels {
        1 = Header 1
        2 = Header 2
        3 = Header 3
        4 = Header 4
        5 = Header 5
    }
 }