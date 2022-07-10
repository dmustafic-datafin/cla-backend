'use strict';

/**
 * client-type service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-type.client-type');
