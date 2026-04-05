// 监听 NexT 主题切换，同步 Giscus 评论区主题
function syncGiscusTheme() {
  const giscusFrame = document.querySelector('iframe.giscus-frame');
  if (!giscusFrame) return;

  // 判断当前主题是亮色还是暗色
  const isDark = document.documentElement.classList.contains('dark') || 
                 window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // 给 Giscus 发送主题切换消息
  giscusFrame.contentWindow.postMessage({
    giscus: {
      setConfig: {
        theme: isDark ? 'dark' : 'light'
      }
    }
  }, '*');
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', syncGiscusTheme);
// PJAX 跳转后执行（解决你之前的PJAX问题）
document.addEventListener('pjax:complete', syncGiscusTheme);
// 监听主题切换按钮点击
document.querySelector('.theme-toggle')?.addEventListener('click', () => {
  // 延迟100ms，等主题切换完成
  setTimeout(syncGiscusTheme, 100);
});
// 监听系统主题变化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncGiscusTheme);
