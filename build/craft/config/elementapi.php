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
                ];
            },
        ],
        'api/news/<entryId:\d+>' => function($entryId) {
            return [
                'elementType' => 'Entry',
                'criteria' => ['id' => $entryId],
                'first' => true,
                'transformer' => function(EntryModel $entry) {
                    return [
                        'id' => $entry->id,
                        'title' => $entry->title,
                        'url' => $entry->url,
                        'body' => (string)$entry->body,
                        'ancestors' => $entry->ancestors,
                        'descendants' => $entry->descendants,
                        'level' => $entry->level,
                        'next' => $entry->next,
                        'prev' => $entry->prev,
                        'nextSibling' => $entry->nextSibling,
                        'parent' => $entry->parent,
                        'section' => $entry->section,
                        'slug' => $entry->slug,
                        'type' => $entry->type,
                        'author' => (string)$entry->author,
                        'date' => $entry->date,

                    ];
                },
            ];
        },
        'api/works' => [
            'elementType' => 'Entry',
            'criteria' => ['section' => 'works'],
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'url' => $entry->url,
                    'jsonUrl' => UrlHelper::getUrl("api/works/{$entry->id}"),
                ];
            },
        ],
    ]
];