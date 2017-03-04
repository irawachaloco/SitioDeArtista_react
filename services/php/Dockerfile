FROM php:7.0-fpm-alpine
MAINTAINER Christian de Botton <debotton@brooklynunited.com>

RUN apk add --update libxml2-dev libmcrypt-dev autoconf g++ imagemagick-dev libtool make \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-install opcache \
    && docker-php-ext-install soap \
    && docker-php-ext-install mcrypt \
    && pecl install imagick \
    && docker-php-ext-enable imagick \
    && apk del autoconf g++ libtool make \
    && rm -rf /tmp/* /var/cache/apk/*
