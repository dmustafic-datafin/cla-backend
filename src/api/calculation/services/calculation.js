'use strict';

/**
 * calculation service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::calculation.calculation');
