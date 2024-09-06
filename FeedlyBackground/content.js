
var hotkey;
chrome.storage.sync.get({ hotkey: ';' }, function (items) {
    hotkey = items.hotkey
});

var keyListener = function (e) {
    if (!e.repeat && e.key === hotkey) {
        // Find the selected frame's title link
        var targetURL = null
        var selectedArticle00 = $('.inlineFrame--selected').find('a.entryTitle')
        var selectedArticle01 = $("[aria-label='Opened Article']").find('a.entryTitle')
        var selectedArticle02 = $('.MagazineLayout--selected').find('a.EntryTitleLink')
        var selectedArticle03 = $('a.EntryTitleLink--selected')

        if (selectedArticle00.length != 0) {
            targetURL = selectedArticle00.attr('href')
        } else if (selectedArticle01.length != 0) {
            targetURL = selectedArticle01.attr('href')
        } else if (selectedArticle02.length != 0) {
            targetURL = selectedArticle02.attr('href')
        } else if (selectedArticle03.length != 0) {
            targetURL = selectedArticle03.attr('href')
        } else {
            console.log("No target URLs found")
        }

        if (targetURL != null) {
            chrome.runtime.sendMessage({ url: targetURL });
        }
    }
}

window.addEventListener('keydown', keyListener, false);
