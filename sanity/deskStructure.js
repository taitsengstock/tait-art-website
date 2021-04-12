import React, { useState, useEffect } from 'react'
import S from "@sanity/desk-tool/structure-builder";
import { IoIosSettings, IoIosVideocam, IoIosPerson, IoIosKeypad, IoMdCreate, IoIosCalendar, IoIosPaper, IoMdList, IoMdClipboard, IoMdDocument } from 'react-icons/io'
import { MdWidgets } from 'react-icons/md'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Artworks')
        .icon(IoMdDocument)
        .child(
          S.documentTypeList('artwork')
          .title('Artworks')
        ),
      S.listItem()
        .title('Mediums')
        .icon(IoMdDocument)
        .child(
          S.documentTypeList('medium')
          .title('Mediums')
        ),
      S.divider(),
      S.listItem()
        .title('Site settings')
        .icon(IoIosSettings)
        .child(
          S.editor()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
    ])
