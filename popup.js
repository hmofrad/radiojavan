// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found this in the LICENSE file.

'use strict';

let link1 = document.getElementById('link1');
link1.onclick = function(element)
{	
    chrome.tabs.getSelected(null,function(tab)
    {
        var tablink = tab.url;
        var prelink = "https://host1.rj-mw1.com/media/mp3/mp3-256/";
        var patt = /([^\/?]+)(?:\?.*)?$/;
        var filename = patt.exec(tablink)[1];
        var downloadurl = prelink + filename + ".mp3";
        chrome.downloads.download
        ({
            url: downloadurl
        });
    });
};

let link2 = document.getElementById('link2');
link2.onclick = function(element)
{
    chrome.tabs.getSelected(null,function(tab)
    {
        var tablink = tab.url;
        var prelink = "https://host2.rj-mw1.com/media/mp3/mp3-256/";
        var patt = /([^\/?]+)(?:\?.*)?$/;
        var filename = patt.exec(tablink)[1];
        var downloadurl = prelink + filename + ".mp3";
        chrome.downloads.download
        ({
            url: downloadurl
        });
    });
};
