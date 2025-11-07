<?php

/**
 * @file
 * Rector configuration for this theme repository.
 */

declare(strict_types=1);

use Rector\Config\RectorConfig;
use Rector\Set\ValueObject\SetList;

return static function (RectorConfig $rectorConfig): void {
  $rectorConfig->paths([
    __DIR__,
  ]);

  // Keep rector conservative for a theme-only repo.
  $rectorConfig->sets([
    SetList::CODE_QUALITY,
    SetList::CODING_STYLE,
    SetList::DEAD_CODE,
    SetList::TYPE_DECLARATION,
    SetList::INSTANCEOF,
    // Target modern PHP features incrementally.
    // PHP 8.2 rules align with 8.4 runtime target.
    SetList::PHP_80,
    SetList::PHP_81,
    SetList::PHP_82,
  ]);

  $rectorConfig->skip([
    '*/vendor/*',
    '*/node_modules/*',
    '*/assets/*',
    '*/styleguide/*',
    '*/css/*',
    '*/js/*',
  ]);

  $rectorConfig->fileExtensions([
    'php', 'theme', 'inc', 'engine', 'module', 'install', 'profile',
  ]);
};
