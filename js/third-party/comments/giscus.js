/* global NexT, CONFIG */

document.addEventListener('page:loaded', async () => {
  if (!CONFIG.page.comments) return;

  await NexT.utils.loadComments('.giscus-container');
  await NexT.utils.getScript('https://giscus.app/client.js', {
    attributes: {
      async                : true,
      crossOrigin          : CONFIG.giscus.crossorigin || 'anonymous',
      'data-repo'          : CONFIG.giscus.repo,
      'data-repo-id'       : CONFIG.giscus.repo_id,
      'data-category'      : CONFIG.giscus.category,
      'data-category-id'   : CONFIG.giscus.category_id,
      'data-mapping'       : CONFIG.giscus.mapping || 'title',
      'data-strict'        : '0',
      'data-reactions-enabled' : CONFIG.giscus.reactions_enabled || '1',
      'data-emit-metadata' : CONFIG.giscus.emit_metadata || '0',
      'data-input-position': CONFIG.giscus.input_position || 'bottom',
      'data-theme'         : CONFIG.giscus.theme || 'light',
      'data-lang'          : CONFIG.giscus.lang || 'zh-CN',
      'data-loading'       : CONFIG.giscus.loading || 'eager'
    },
    parentNode: document.querySelector('.giscus-container')
  });
});
