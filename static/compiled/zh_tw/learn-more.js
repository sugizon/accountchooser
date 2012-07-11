/* Copyright 2012 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var a=window,f=jQuery,g="length",i="",j='"]',k="#",l=".widget-footer",o='<a href="http://accountchooser.net/owners">',p='[id^="',q="id",r="\u3002",s="\u5982\u679c\u60a8\u662f\u7db2\u7ad9\u7ba1\u7406\u4eba\u54e1\uff0c\u4e0d\u59a8",t="\u77ad\u89e3\u5982\u4f55\u90e8\u7f72\u5e33\u6236\u9078\u64c7\u5de5\u5177";a.accountchooser=a.accountchooser||{};a.cds=a.accountchooser;function u(b,d){return s+(b+(t+(d+r)))}
a.accountchooser.cdsLearnMorePageMessages={title:"\u9032\u4e00\u6b65\u77ad\u89e3\u96c6\u4e2d\u5f0f\u5e33\u6236\u9078\u64c7\u5de5\u5177\u670d\u52d9 - \u5e33\u6236\u9078\u64c7\u5de5\u5177\u5de5\u4f5c\u5c0f\u7d44",header:"\u9032\u4e00\u6b65\u77ad\u89e3\u96c6\u4e2d\u5f0f\u5e33\u6236\u9078\u64c7\u5de5\u5177\u670d\u52d9",deployReminder1:u(o,"</a>"),sec1Par1:'\u8d8a\u4f86\u8d8a\u591a\u7684\u7db2\u7ad9\u90fd\u5df2\u6539\u7528\u5e33\u6236\u9078\u64c7\u5de5\u5177\u53d6\u4ee3\u50b3\u7d71\u7684\u767b\u5165\u65b9\u584a\uff0c\u70ba\u7684\u662f\u8b93\u7db2\u7ad9\u66f4\u5b89\u5168\u4e14\u66f4\u5bb9\u6613\u4f7f\u7528 (<a href="https://ac-cribwars.appspot.com">\u700f\u89bd\u7bc4\u4f8b\u7db2\u7ad9</a>)\u3002\u7576\u60a8\u5617\u8a66\u767b\u5165\u9019\u985e\u7db2\u7ad9\u6642\uff0c\u6703\u770b\u5230\u4e0b\u65b9\u9019\u6a23\u7684\u7db2\u9801\uff0c\u7576\u4e2d\u5217\u51fa\u4e86\u60a8\u5728\u9019\u90e8\u96fb\u8166\u4e0a\u6700\u5e38\u4f7f\u7528\u7684\u5e33\u6236\uff1a',
sec1Par2:"\u53ea\u9700\u6309\u4e00\u4e0b\u60f3\u8981\u4f7f\u7528\u7684\u5e33\u6236\u5373\u53ef\uff1b\u8981\u662f\u60a8\u6c92\u770b\u5230\u60f3\u4f7f\u7528\u7684\u5e33\u6236\uff0c\u53ea\u8981\u6309\u4e00\u4e0b\u5e95\u4e0b\u7684\u6309\u9215\u5373\u53ef\u65b0\u589e\u5176\u4ed6\u5e33\u6236\u3002",sec1Par3:"\u767b\u5165\u5e33\u6236\u4e4b\u5f8c\uff0c\u60a8\u6703\u770b\u5230\u50cf\u9019\u6a23\u7684\u756b\u9762\uff0c\u8981\u6c42\u60a8\u78ba\u8a8d\u662f\u5426\u8981\u5728\u9019\u53f0\u96fb\u8166\u4e0a\u628a\u5e33\u6236\u52a0\u5165\u5e33\u6236\u6e05\u55ae\u3002",
subHeader1:"\u9032\u968e\u4e3b\u984c",sec2Par1:"\u5982\u679c\u60a8\u60f3\u79fb\u9664\u67d0\u500b\u5e33\u6236\uff0c\u5c07\u6ed1\u9f20\u79fb\u81f3\u8a72\u5e33\u6236\u9805\u76ee\u4e0a\u65b9\uff0c\u7136\u5f8c\u9078\u64c7\u4e0a\u65b9\u89d2\u843d\u7684 [X] \u6309\u9215\u5373\u53ef\u522a\u9664 (\u5982\u679c\u60a8\u4f7f\u7528\u884c\u52d5\u7248\u700f\u89bd\u5668\uff0c\u8acb\u6309\u4e00\u4e0b [\u7de8\u8f2f] \u6309\u9215)\u3002\u4e0d\u904e\uff0c\u5982\u679c\u60a8\u8207\u4ed6\u4eba\u5171\u7528\u96fb\u8166\uff0c\u53c8\u4e0d\u5e0c\u671b\u81ea\u5df1\u7684\u5e33\u6236\u9805\u76ee\u8207\u5176\u4ed6\u4eba\u7684\u6df7\u5728\u4e00\u8d77\uff0c\u90a3\u9ebc\u61c9\u8a72\u8003\u616e\u4f7f\u7528\u4e00\u4e9b\u65b9\u6cd5\u5c07\u700f\u89bd\u5668\u8cc7\u8a0a\u5206\u958b\u5b58\u653e\u3002\u4f8b\u5982\uff1a",
sec2Par1List1:"\u4f7f\u7528\u5176\u4ed6\u4f5c\u696d\u7cfb\u7d71\u5e33\u6236",sec2Par1List2:"\u4f7f\u7528\u5176\u4ed6\u700f\u89bd\u5668",sec2Par1List3:'\u5728\u700f\u89bd\u5668\u4e2d\u4f7f\u7528\u4e0d\u540c\u7684\u8a2d\u5b9a\u6a94 (\u77ad\u89e3\u5982\u4f55\u5728 <a href="http://support.mozilla.org/en-US/kb/Managing-profiles">Firefox</a> \u6216 <a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=2364824">Google Chrome</a> \u4e2d\u4f7f\u7528\u4e0d\u540c\u7684\u8a2d\u5b9a\u6a94)',sec2Par1List4:'\u4f7f\u7528\u700f\u89bd\u5668\u7684\u79c1\u5bc6\u700f\u89bd\u529f\u80fd (\u77ad\u89e3\u5982\u4f55\u5728 <a href="http://windows.microsoft.com/en-US/windows7/What-is-InPrivate-Browsing">Internet Explorer</a>\u3001<a href="http://support.mozilla.org/en-US/kb/Private-Browsing">Firefox</a>\u3001<a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=95464">Google Chrome</a> \u6216  <a href="http://docs.info.apple.com/article.html?path=Safari/3.0/en/9311.html">Safari</a> \u4e2d\u4f7f\u7528\u6b64\u529f\u80fd)',
sec2Par2:'accountchooser.com \u6240\u986f\u793a\u7684\u5e33\u6236\u6e05\u55ae\u6703\u5132\u5b58\u5728\u60a8\u7684\u700f\u89bd\u5668\u4e2d\u3002\u9664\u975e\u60a8\u7279\u5225\u6307\u5b9a\u67d0\u500b\u5e33\u6236\u8981\u5728\u7279\u5b9a\u7db2\u7ad9\u4e0a\u4f7f\u7528\uff0c\u5426\u5247\u6211\u5011\u7d55\u5c0d\u4e0d\u6703\u5411\u4efb\u4f55\u7db2\u7ad9\u900f\u9732\u60a8\u7684\u5e33\u6236\u3002\u60a8\u96a8\u6642\u90fd\u53ef\u4ee5\u76f4\u63a5\u524d\u5f80<a href="/">\u96c6\u4e2d\u5f0f\u5e33\u6236\u9078\u64c7\u5de5\u5177\u7db2\u7ad9</a>\u6aa2\u8996\u6216\u522a\u9664\u5e33\u6236\u9805\u76ee\u3002\u60a8\u4e5f\u53ef\u4ee5\u524d\u5f80<a href="/config.html">\u9019\u500b\u7db2\u9801</a>\u505c\u7528\u6216\u91cd\u65b0\u555f\u7528\u5e33\u6236\u9078\u64c7\u5de5\u5177\u670d\u52d9\u3002',
subHeader2:"\u7db2\u7ad9\u64c1\u6709\u8005\uff1a\u77ad\u89e3\u5347\u7d1a\u7db2\u7ad9\u7684\u65b9\u5f0f",sec3Par1:"\u60a8\u7684\u7db2\u7ad9\u5347\u7d1a\u5f8c\u53ef\u4eab\u6709\u300c\u5e33\u6236\u9078\u64c7\u5de5\u5177\u300d\u7684\u82e5\u5e72\u512a\u9ede\uff1a",sec3Par1List1:"\u63d0\u9ad8\u7db2\u7ad9\u7684\u767b\u5165\u7387\u8207\u8a3b\u518a\u7387",sec3Par1List2:"\u7db2\u7ad9\u672a\u4f86\u6613\u65bc\u652f\u63f4\u8eab\u5206\u63d0\u4f9b\u8005",sec3Par1List3:"\u7db2\u7ad9\u53ea\u9700\u5c0f\u5e45\u66f4\u6539",
deployReminder2:u(o,"</a>"),deployButton:'<a href="http://accountchooser.net/owners" class="button" style="width:100%">Learn how you can deploy an account chooser</a>'};a.accountchooser.DEFAULT_ACCOUNT_MAN_HOME_={email:"john.garcia@gmail.com",displayName:"John Garcia",photoUrl:"https://ssl.gstatic.com/cds/image/man-personal.jpg"};a.accountchooser.DEFAULT_ACCOUNT_MAN_WORK_={email:"jgarcia@summitmedgroup.com",displayName:"John Garcia",photoUrl:"https://ssl.gstatic.com/cds/image/man-professional.jpg"};
a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_={email:"sara_corlett@yahoo.com",displayName:"Sara Corlett",photoUrl:"https://ssl.gstatic.com/cds/image/woman-personal.jpg"};a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_={email:"corlett@alertblue.com",displayName:"Mrs. Corlett",photoUrl:"https://ssl.gstatic.com/cds/image/woman-professional.jpg"};a.accountchooser.setWindowTitle=function(b){a.document.title=(b||a.accountchooser.cdsLearnMorePageMessages).title};
a.accountchooser.showMessages=function(b,d){var c=f(p+b+j),e=d||a.accountchooser.cdsLearnMorePageMessages;if(c&&e)for(var h=0;h<c[g];h++){var m=f(c[h]),n=m.attr(q).replace(b,i);e[n]&&m.html(e[n])}};a.accountchooser.showSelectAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.SelectAccountPage,c=a.accountchooser.getAccountList_();d.render(b,null,c,!0,void 0,void 0,null,!1);b.children(l).hide()};
a.accountchooser.showShareAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.ShareAccountPage,c=a.accountchooser.getAccountList_(),e=Math.floor(Math.random()*c[g]),e=c.splice(e,1)[0];d.render(b,e,c,void 0,null,!1);b.children(l).hide()};a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_=2;a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_=2;
a.accountchooser.getAccountList_=function(){var b=a.accountchooser.util.accountstorage.readAccounts(),d=a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_,c=a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_;return b[g]>d?b.slice(0,d):b[g]<c?[a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_,a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_]:b};
