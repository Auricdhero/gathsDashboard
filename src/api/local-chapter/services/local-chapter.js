'use strict';

/**
 * local-chapter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::local-chapter.local-chapter');
