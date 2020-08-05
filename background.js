// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
var collected = false
var timer = setInterval(function () {
	console.log('checking rain....')
	if (document.querySelector('.chat-rain-message > div:nth-child(4) > button')) {
		collected = true
	}
	if(collected) {
		console.log("rain collected!")
		document.querySelector('.chat-rain-message > div:nth-child(4) > button').click();
		collected = false
	}
}, 1000);