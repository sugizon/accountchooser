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

var a=window,f=jQuery,g="length",i="",j='"]',k="#",l=".",o=".widget-footer",p='<a href="http://accountchooser.net/owners">',q="Se gerir um Web site, ",r='[id^="',s="id",t="saiba como pode implementar um selecionador de contas";a.accountchooser=a.accountchooser||{};a.cds=a.accountchooser;function u(b,d){return q+(b+(t+(d+l)))}
a.accountchooser.cdsLearnMorePageMessages={title:"Saiba mais sobre o servi\u00e7o de selecionador de contas central \u2013 grupo de trabalho Selecionador de Contas",header:"Saiba mais sobre o servi\u00e7o de selecionador de contas central",deployReminder1:u(p,"</a>"),sec1Par1:'Os websites est\u00e3o a substituir as tradicionais caixas de in\u00edcio de sess\u00e3o por um selecionador de contas, tornando esses websites mais seguros e f\u00e1ceis de utilizar(<a href="https://ac-cribwars.appspot.com">explorar um website de exemplo</a>). Quando tenta iniciar sess\u00e3o num desses websites, \u00e9 apresentada uma p\u00e1gina como esta com a lista de contas que utiliza frequentemente neste computador:',
sec1Par2:"Basta clicar na conta que pretende utilizar. Se n\u00e3o conseguir ver uma entrada para a conta pretendida, basta clicar no bot\u00e3o na parte inferior para adicionar outra conta.",sec1Par3:"Assim que iniciar sess\u00e3o na conta, ser-lhe-\u00e1 apresentada uma p\u00e1gina como esta a solicitar-lhe que confirme que pretende adicion\u00e1-la \u00e0 lista de contas neste computador.",subHeader1:"T\u00f3picos Avan\u00e7ados",sec2Par1:"Se pretender remover uma conta, pode utilizar o rato para pairar sobre essa entrada de conta e, em seguida, escolha o bot\u00e3o X no canto superior para elimin\u00e1-la (ou, nos navegadores para telem\u00f3veis, clique no bot\u00e3o Editar). No entanto, se estiver a utilizar um computador partilhado e n\u00e3o pretender misturar as entradas de conta com outras pessoas, dever\u00e1 considerar a utiliza\u00e7\u00e3o de uma abordagem que mantenha as informa\u00e7\u00f5es do navegador separadas. Por exemplo:",
sec2Par1List1:"Utilizar contas diferentes do sistema operativo",sec2Par1List2:"Utilizar navegadores diferentes",sec2Par1List3:'Utilizar perfis diferentes no navegador (saiba como utiliz\u00e1-los no <a href="http://support.mozilla.org/en-US/kb/Managing-profiles">Firefox</a> ou <a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=2364824">Google Chrome</a>)',sec2Par1List4:'Utilizar a funcionalidade de navega\u00e7\u00e3o an\u00f3nima do navegador (saiba como utiliz\u00e1-la no <a href="http://windows.microsoft.com/en-US/windows7/What-is-InPrivate-Browsing">Internet Explorer</a>, <a href="http://support.mozilla.org/en-US/kb/Private-Browsing">Firefox</a>, <a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=95464">Google Chrome</a> ou <a href="http://docs.info.apple.com/article.html?path=Safari/3.0/en/9311.html">Safari</a>)',
sec2Par2:'A lista de contas apresentadas por accountchooser.com \u00e9 armazenada no seu navegador. As informa\u00e7\u00f5es da conta nunca s\u00e3o partilhadas com um site, a menos que selecione explicitamente uma conta a utilizar no site. Pode visitar o <a href="/">site do selecionador de contas central</a> diretamente em qualquer altura para ver ou eliminar entradas de contas. Tamb\u00e9m pode desativar ou reativar o servi\u00e7o de selecionador de contas no seu computador visitando <a href="/config.html">esta p\u00e1gina</a>.',
subHeader2:"Propriet\u00e1rios de Websites: saiba como atualizar o seu Website",sec3Par1:"Existem v\u00e1rias vantagens em atualizar o website para utilizar um Selecionador de Contas:",sec3Par1List1:"Aumente as taxas de in\u00edcio de sess\u00e3o e inscri\u00e7\u00e3o no seu Website",sec3Par1List2:"Faz com que seja mais f\u00e1cil para o seu Website suportar fornecedores de identidade no futuro",sec3Par1List3:"Precisa apenas de algumas altera\u00e7\u00f5es muito pequenas no Website",deployReminder2:u(p,
"</a>"),deployButton:'<a href="http://accountchooser.net/owners" class="button" style="width:100%">Learn how you can deploy an account chooser</a>'};a.accountchooser.DEFAULT_ACCOUNT_MAN_HOME_={email:"john.garcia@gmail.com",displayName:"John Garcia",photoUrl:"https://ssl.gstatic.com/cds/image/man-personal.jpg"};a.accountchooser.DEFAULT_ACCOUNT_MAN_WORK_={email:"jgarcia@summitmedgroup.com",displayName:"John Garcia",photoUrl:"https://ssl.gstatic.com/cds/image/man-professional.jpg"};
a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_={email:"sara_corlett@yahoo.com",displayName:"Sara Corlett",photoUrl:"https://ssl.gstatic.com/cds/image/woman-personal.jpg"};a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_={email:"corlett@alertblue.com",displayName:"Mrs. Corlett",photoUrl:"https://ssl.gstatic.com/cds/image/woman-professional.jpg"};a.accountchooser.setWindowTitle=function(b){a.document.title=(b||a.accountchooser.cdsLearnMorePageMessages).title};
a.accountchooser.showMessages=function(b,d){var c=f(r+b+j),e=d||a.accountchooser.cdsLearnMorePageMessages;if(c&&e)for(var h=0;h<c[g];h++){var m=f(c[h]),n=m.attr(s).replace(b,i);e[n]&&m.html(e[n])}};a.accountchooser.showSelectAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.SelectAccountPage,c=a.accountchooser.getAccountList_();d.render(b,null,c,!0,void 0,void 0,null,!1);b.children(o).hide()};
a.accountchooser.showShareAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.ShareAccountPage,c=a.accountchooser.getAccountList_(),e=Math.floor(Math.random()*c[g]),e=c.splice(e,1)[0];d.render(b,e,c,void 0,null,!1);b.children(o).hide()};a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_=2;a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_=2;
a.accountchooser.getAccountList_=function(){var b=a.accountchooser.util.accountstorage.readAccounts(),d=a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_,c=a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_;return b[g]>d?b.slice(0,d):b[g]<c?[a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_,a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_]:b};
