<?php
namespace Craft;

return [
    'endpoints' => [
        'api/news' => [
            'elementType' => 'Entry',
            'criteria' => ['section' => 'news'],
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'url' => $entry->url,
                    'jsonUrl' => UrlHelper::getUrl("api/news/{$entry->id}"),
                    'date' => $entry->date,
                    'image' => ($entry->image->first()? $entry->image->first()->getUrl() : '')
                ];
            },
        ],
        'api/works' => [
            'elementType' => 'Entry',
            'criteria' => ['section' => 'works'],
            'transformer' => function(EntryModel $entry) {
                $subWorksList = [];
                foreach ($entry->worksList as $theWorksList) {
                    $subWorksList[] = [
                        'title' => $theWorksList->itemTitle,
                        'technique' => $theWorksList->technique,
                        'year' => $theWorksList->year,
                        'itemImage' => ($theWorksList->itemImage->first()? $theWorksList->itemImage->first()->getUrl() : '')
                        ];
                }
                return [
                    'title' => $entry->title,
                    'url' => $entry->url,
                    'jsonUrl' => UrlHelper::getUrl("api/works/{$entry->id}"),
                    'authorName' => (string)$entry->authorName,
                    'subWorks' => $subWorksList
                ];
            },
        ],
        'api/authors' => [
            'elementType' => 'Entry',
            'criteria' => ['section' => 'authorsList'],
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'url' => $entry->url,
                    'jsonUrl' => UrlHelper::getUrl("api/authorsList/{$entry->id}"),
                ];
            },
        ],
        /*'matrix-blocks/<blockId:\d+>' => function($blockId) {
            return [
                'elementType' => 'MatrixBlock',
                'criteria' => [
                    'id' => $blockId
                ],
                'first' => true, // Just return one Matrix block
                'transformer' => function(MatrixBlock $block) {
                    $assetsInfo = [];

                    foreach ($block->myAssetsfield as $asset) {
                        $assetsInfo[] = [
                            'url' => $asset->url,
                            'title' => $asset->title,
                            // ...
                        ];
                    }

                    return [
                        'id' => $block->id,
                        'assets' => $AssetsInfo,
                        // ...
                    ];
                },
            ];
        },*/
        'api/works/<entryId:\d+>' => function($entryId) {
            return [
                'elementType' => 'Entry',
                'criteria' => ['id' => $entryId],
                'first' => true,
                'transformer' => function(EntryModel $entry) {
                    $bodyBlocks = [];
                    foreach ($entry->body as $block) {
                        switch ($block->type->handle) {
                            case 'text':
                                $bodyBlocks[] = [
                                    'text' => $block->worksList->getParsedContent(),
                                ];
                                break;
                            case 'image':
                                $image = $block->worksList->first();
                                $bodyBlocks[] = [
                                    /*'image' => $image ? $image->getUrl(['width' => 500]),*/
                                    'item' => $block->itemTitle,
                                ];
                                break;
                        }
                    }

                    return [
                        'id' => $entry->id,
                        'title' => $entry->title,
                        'body' => $bodyBlocks,

                    ];
                },
            ];
        },
    ]
];