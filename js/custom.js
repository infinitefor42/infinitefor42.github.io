// 监听主题变化，同步给 Giscus
function updateGiscusTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const giscusFrame = document.querySelector('iframe.giscus-frame');
    
    if (!giscusFrame) return;

    // 发送消息给 Giscus iframe
    giscusFrame.contentWindow.postMessage({
        giscus: {
            setConfig: {
                // 根据当前网页类名，决定发给 Giscus 哪个主题
                theme: isDark ? 'dark' : 'light'
            }
        }
    }, 'https://giscus.app');
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', updateGiscusTheme);
// PJAX 跳转后
document.addEventListener('pjax:complete', updateGiscusTheme);
// 监听你点击切换主题的按钮
document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    // 延时200ms，等网页主题类切换完成后再发送
    setTimeout(updateGiscusTheme, 200);
});
