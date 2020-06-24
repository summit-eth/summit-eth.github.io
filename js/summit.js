$(function () {

	function gweiTowei(_in) {
		return (_in * 1000000000);
	}
	
	var currentPage = 1;
	
	var hideAllPages = function() {
		$("#page-landing, #page-faq, #page-account, #page-direct, #page-multi, #loader").hide();
	};
	
	var toggleLoader = function(s) {
		$("#loader").toggle();
		if(s != "") {
			$("#loader > img").attr("src", "img/loader-" + s + ".png");
		}
	};
	var showLoader = function(s) {
		$("#loader").show();
		if(s != "") {
			$("#loader > img").attr("src", "img/loader-" + s + ".png");
		}
	};
	var hideLoader = function() {
		$("#loader").hide();
	};
	
	var showAccountPage = function() {
		hideAllPages();
		switch(currentPage) {
			case 1: showDirectPage();
			break;
			case 2: showMultiPage();
			break;
		}
		$("#page-header, #page-account").show();
	};
	
	var showDirectPage = function() {
		$("#page-multi").hide();
		$("#page-header, #page-direct").show();
		
		currentPage = 1;
	};
	
	var showMultiPage = function() {
		$("#page-direct").hide();
		$("#page-header, #page-multi").show();
		
		currentPage = 2;
	};
	
	var hideConnectBtn = function() {
		$("#btnConnect").hide();
	};
	
	var showConnectBtn = function() {
		$("#btnConnect").show();
	};
	
	var hideRegBtn = function() {
		$("#btnReg").hide();
	};
	
	var showRegBtn = function() {
		$("#btnReg").show();
	};
	
	var showHowBtn = function() {
		$("#btnHow").show();
	};
	
	var hideHowBtn = function() {
		$("#btnHow").hide();
	};
	
	hideRegBtn();
	
	// hide containers
	hideAllPages();
	$("#page-landing").show();
	//showAccountPage();
	//showDirectPage();
	//showMultiPage();
    //$("#page-faq").show().css({top: 0});
	
	
	
	
	
	
	// setup buttons
	
	$("#btnLogout").on("click", function(e) {
		Cookies.set('ref', "");
		showLoader("wait");
		setTimeout(function() {
			top.location.href = top.location.origin + top.location.pathname;
		}, 1500);
	});
	$("#btnViewFaq, #btnViewFaqs").on("click", function(e) {
		$("#page-faq").show().css({top: 0});
	});
	
	$("#faqButtonClose, #btnJoinNow").on("click", function(e) {
		$("#page-faq").css({top: "100%"});
		setTimeout(function() {$("#page-faq").hide()},1000);
	});
	
	/*$("#btnConnect").on("click", function(e) {
		showLoader("wallet");
		
	});*/
	
	$("#btnDirectPage").on("click", function(e) {
		currentPage = 1;
		showDirectPage();
	});
	
	$("#btnMultiPage").on("click", function(e) {
		currentPage = 2;
		showMultiPage();
	});
	
	$("#btnAccountPage").on("click", function(e) {
		currentPage = 3;
		showAccountPage();
	});
	
	// setup matrices
	var $direct = $("#page-direct .container");
	var $multi = $("#page-multi .container");
	for(var i=0, t, u, p=0.01; i<12; i++) {
		p = p * 2;
		t = $("<div id='direct_level" + (i+1) + "' class='disabled'></div>");
		u = $("<div id='multi_level" + (i+1) + "' class='disabled'></div>");
		//t.append("<h3>LEVEL " + (i+1) + "</h3><h5>ETH earned: <span id='direct_level" + (i+1) + "_earned'>-</span></h5>");
		//u.append("<h3>LEVEL " + (i+1) + "</h3><h5>ETH earned: <span id='multi_level" + (i+1) + "_earned'>-</span></h5>");
		//t.append("<table><tr><td>&nbsp;</td><td><span id='direct_level" + (i+1) + "_referrer'>&mdash;</span></td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span id='direct_idOfLevel" + (i+1) +"_1'>&mdash;</span></td><td><span id='direct_idOfLevel" + (i+1) +"_2'>&mdash;</span></td><td>&nbsp;</td></tr></table><span id='direct_level" + (i+1) + "_buy' class='hide'><button id='directBuyBtn_level" + (i+1) + "'>UNLOCK (" + p.toString() + " ETH)</button></span><br><hr>");
		//t.append("<table><tr><td colspan=2>UP: <span id='direct_level" + (i+1) + "_referrer'>&mdash;</span></td><td colspan=2>&nbsp;</td></tr><tr><td colspan=2><h3>LEVEL " + (i+1) + "</h3></td><td colspan=2>&nbsp;</td></tr><tr><td colspan=3><h5>ETH earned: <span id='direct_level" + (i+1) + "_earned'>-</span></h5></td><td>&nbsp;</td></tr><tr><td colspan=2><span id='direct_idOfLevel" + (i+1) +"_1'>&mdash;</span></td><td colspan=2><span id='direct_idOfLevel" + (i+1) +"_2'>&mdash;</span></td></tr></table><span id='direct_level" + (i+1) + "_buy' class='hide'><button id='directBuyBtn_level" + (i+1) + "'>UNLOCK (" + p.toString() + " ETH)</button></span><hr>");
		//u.append("<table><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td><span id='multi_level" + (i+1) + "_referrer'>&mdash;</span></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td><span id='multi_idOfLevel" + (i+1) +"_1_1'>&mdash;</span></td><td>&nbsp;</td><td><span id='multi_idOfLevel" + (i+1) +"_1_2'>&mdash;</span></td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td><span id='multi_idOfLevel" + (i+1) +"_2_1'>&mdash;</span></td><td>&nbsp;</td><td><span id='multi_idOfLevel" + (i+1) +"_2_2'>&mdash;</span></td><td>&nbsp;</td><td><span id='multi_idOfLevel" + (i+1) +"_2_3'>&mdash;</span></td><td>&nbsp;</td><td>&nbsp;</td></tr></table><span id='multi_level" + (i+1) + "_buy' class='hide'><button id='multiBuyBtn_level" + (i+1) + "'>UNLOCK (" + p.toString() + " ETH)</button></span><br><hr>");
		t.append("<table><tr><td><span id='direct_level" + (i+1) + "_referrer'>&mdash;</span></td><td>&nbsp;</td></tr><tr><td colspan=2><h3>LEVEL " + (i+1) + "</h3></td></tr><tr><td colspan=2><h5>ETH earned: <span id='direct_level" + (i+1) + "_earned'>-</span></h5></td></tr> <tr><td><span id='direct_idOfLevel" + (i+1) +"_1'>&mdash;</span> <span id='direct_idOfLevel" + (i+1) +"_2'>&mdash;</span></td><td><span id='direct_refOfLevel" + (i+1) + "'><img src='img/refresh.png'></span></td></tr></table><span id='direct_level" + (i+1) + "_buy' class='hide'><button id='directBuyBtn_level" + (i+1) + "'>UNLOCK (" + p.toString() + " ETH)</button></span><hr>");
		u.append("<table><tr><td><span id='multi_level" + (i+1) + "_referrer'>&mdash;</span></td><td>&nbsp;</td></tr><tr><td colspan=2><h3>LEVEL " + (i+1) + "</h3></td></tr><tr><td colspan=2><h5>ETH earned: <span id='multi_level" + (i+1) + "_earned'>-</span></h5></td></tr> <tr><td><span id='multi_idOfLevel" + (i+1) +"_1_1'>&mdash;</span></td><td><span id='multi_idOfLevel" + (i+1) +"_1_2'>&mdash;</span></td></tr> <tr><td><span id='multi_idOfLevel" + (i+1) +"_2_1'>&mdash;</span><span id='multi_idOfLevel" + (i+1) +"_2_2'>&mdash;</span></td><td><span id='multi_idOfLevel" + (i+1) +"_2_3'>&mdash;</span><span id='multi_refOfLevel" + (i+1) + "'><img src='img/refresh.png'></span></td></tr></table><span id='multi_level" + (i+1) + "_buy' class='hide'><button id='multiBuyBtn_level" + (i+1) + "'>UNLOCK (" + p.toString() + " ETH)</button></span><hr>");
		$direct.append(t);
		$multi.append(u);
	}
	

	var isMobile = false;
	var hasMetamask = false;
	var hasWeb3Wallet = false;
	var web3Provider;

	var summitEthProvider;
	var summitEthConn;
	var summitEthContract;

	var useLocal = false;
	var summitServer = (useLocal) ? "ws://127.0.0.1:8545" : "wss://ropsten.infura.io/ws/v3/8d8fc8f952d54c358dad23a1caff3be2";
	// var summitServer = "wss://mainnet.infura.io/ws/v3/8d8fc8f952d54c358dad23a1caff3be2";
	
	var ethContractAddr = (useLocal) ? "0xb4c6113eb5eec093a5bea2414605dbbee5c496c0" : "0xa591595E755Aa6ddc8A8D924419a64df1347992f";
	// var ethContractAddr = "";
	
	var defAcc = "0x9221E96fa80104162D6f5aaBB6BBDEf27bE5958f";
	// var defAcc = "";

	var ethContract;

	var usrWalletAddress;
    var userId = 0;
	var currUserID = 2;
	var userObj;

	var referrer;
	var referrerShort;
	var referrerAddress;
	var requiresFreeRef = false;
	
	var TOKEN_DECIMALS = 1e18;
	var currentETHbalance = 0;
	
	var userWalletEnabled = false;	
	var canPlay = true;
	var registrationBtnOpen = false;

	var levelPrice = []

	levelPrice[0] = new BigNumber(20000000000000000);
	for(let c=1; c< 12; c++) {
		levelPrice[c] = new BigNumber(levelPrice[c-1]).times(2);
	}

	var gasPrice = 350;

	var direct_matrix_friends_by_level = new Array(12);
	var direct_matrix_reinvests_by_level = new Array(12);
	var direct_matrix_missed_by_level = new Array(12);
	var direct_matrix_extra_by_level = new Array(12);


	var multi_matrix_friends_by_level = new Array(12);
	var multi_matrix_reinvests_by_level = new Array(12);
	var multi_matrix_missed_by_level = new Array(12);
	var multi_matrix_extra_by_level = new Array(12);
	

	var direct_earnings_by_level = new Array(12);
	var multi_earnings_by_level = new Array(12);
	var totalEarnings = new BigNumber(0);
	for(let c=0; c< 12;c++) {
		direct_matrix_friends_by_level[c] = [];
		multi_matrix_friends_by_level[c] = [];
		direct_matrix_reinvests_by_level[c] = [];
		multi_matrix_reinvests_by_level[c] = [];
		direct_matrix_missed_by_level[c] = [];
		multi_matrix_missed_by_level[c] = [];
		direct_matrix_extra_by_level[c] = [];
		multi_matrix_extra_by_level[c] = []

		direct_earnings_by_level[c] = new BigNumber(0);
		multi_earnings_by_level[c] = new BigNumber(0);
	}

	var isMobileCheck = window.matchMedia("only screen and (pointer:coarse)");
	if(isMobileCheck.matches){
		isMobile = true;
	}


	const isMetaMaskInstalled = () => {
		const { ethereum } = window;
		return Boolean(ethereum && ethereum.isMetaMask);
	};

	const onClickConnect = async () => {
		try {
			showLoader("wallet");
			//Will Start the MetaMask Extension
			if(ethereum.enable){
				try{
					await ethereum.enable();
	/*
					window.ethereum.on('accountsChanged', function (accounts) {
					  location.reload();
					});
	*/
					userWalletEnabled = true;
					beginSetup();	    		
				} catch (e) {
					// user denied
					//beginSetup();
				}
			} else if (window.web3) {
				userWalletEnabled = true;
				beginSetup();
			} else {
				beginSetup();
			}
		} catch (error) {
			hideLoader();
			console.error(error);
		}
	};
	
	
	setupRates();
	getGasPrices();

	var readonlyEnv = false;

	setupReadOnlyWeb3(function(){
		readonlyEnv = true;
	});
	
	function setupReadOnlyWeb3(_callback) {
		// READ ONLY CONNECTION...
		// console.log("READONLY SETUP", summitServer);
		summitEthProvider = new Web3.providers.WebsocketProvider(summitServer);
		
		
		summitEthProvider.on('connect',function(e){

			summitEthConn = new Web3(summitEthProvider);
			summitEthContract = new summitEthConn.eth.Contract(summitAbi.abi, ethContractAddr);

			getSummitStats();

			if(_callback)
				_callback();

			setTimeout(function(){
				//startListeners();
			},2000);
		});

		summitEthProvider.on('error', function(e){
			
		  //console.error('WS Error', e);
		  reconnectProvider(0);
		});

		summitEthProvider.on('end', function(e) {
		  reconnectProvider(0);
		});
	}
	function reconnectProvider(_tries) {
	  try {
		console.log("ws restarting...");
		summitEthProvider = new Web3.providers.WebsocketProvider(summitServer);

		summitEthProvider.on('connect', function () {
			console.log('WSS Reconnected');
			summitEthConn = new Web3(summitEthProvider);
			summitEthContract = new summitEthConn.eth.Contract(summitAbi.abi, ethContractAddr);
		});

		summitEthProvider.on('error', function(e) {
		  console.log('ws reconnect error', e);
		  reconnectProvider(_tries++);
		});

		summitEthProvider.on('end', function(e) {
		  console.log('ws reconnect end', e);
		  reconnectProvider(_tries++);
		});

	  } catch (e) {
		console.log(e);
		_tries++;
		if(_tries < 20){
		  setTimeout(function() {
			reconnectProvider(_tries); 
		  }, 500);
		} else {
		  // fail
		}
	  }
	}

	function getSummitStats() {
		
		/*summitEthContract.methods.lastUserId().call(function(_err, _result){
			if(!_err){
				console.log("lastuserid: " + _result);
			}
		})*/;
		summitEthContract.methods.totalShares().call(function(_err, _result){
			if(!_err){
				let _totalEth = new BigNumber(_result);
				
				let _btc = _totalEth.div(TOKEN_DECIMALS).div(new BigNumber(exchange_btc_eth));
				let _usd = _btc.times(exchange_btc_usd);
				console.log("TotalETH: " + _totalEth.div(TOKEN_DECIMALS).toFixed(8));
				console.log("TotalBTC: " + _btc.toFixed(8));
				console.log("TotalUSD: $" + _usd.toFixed(2));
				
			}
		});
        //summitEthContract.methods.users("0x9221E96fa80104162D6f5aaBB6BBDEf27bE5958f").call(function(e, res) { console.log(res) });
        //summitEthContract.methods.serverShares().call(function(e, res) { console.log(res) });

		setTimeout(function(){ getSummitStats();}, 15000);
	}

	function beginSetup() {
		/*
		for(let c=0; c< 10; c++) {
			usersActiveInLvls.push(0);
		}
		console.log("usersActiveInLvls:", usersActiveInLvls);
		*/

		web3Provider = new Web3(window.web3.currentProvider);

		checkNetwork(startSystem);
	}


	// entry point

	//$(document).foundation();

	var _newReferrer = getUrlParameter('ref')||"";
	if(_newReferrer.length > 0) { // newly referred
		referrer = _newReferrer;
	} else { // existing user referred by someone
		var _cookieRef = Cookies.get('ref')||"";
		if(_cookieRef.length >0)
			referrer = _cookieRef;
	}
	Cookies.set('ref', referrer, { expires: 60 });
	console.log("REF:", referrer);
	if(referrer)
		referrerShort = referrer.substring(0,20) + "...";


	hasMetamask = isMetaMaskInstalled();
	if(hasMetamask){
		hasWeb3Wallet = true;
	} else {
		if(window.web3){
			ethereum = window.web3;
			hasWeb3Wallet = true;
		}

	}

	if(hasWeb3Wallet) {
		showConnectBtn();
		hideHowBtn();
	} else {
		showHowBtn();
		hideConnectBtn();
		hideRegBtn();
	}
	console.log("hasWeb3Wallet:", hasWeb3Wallet);
	console.log("isMetaMaskInstalled:", isMetaMaskInstalled());



	setupButtons();
	// calcActiveDays();

	function checkNetwork(_callback) {
		
	  web3Provider.eth.net.getNetworkType(function(err, res) {

		ethContract = new web3Provider.eth.Contract(summitAbi.abi, ethContractAddr);
		
		if(_callback)
			_callback();

		
	  });
	}

	function startSystem() {
		// jQuery.timeago.settings.allowFuture = true;



		// setup days running
		


		if(isMobile){
			setTimeout(function(){ mainEntry();}, 1000);
		} else {
			mainEntry();
		}

		function mainEntry() {
			if(!readonlyEnv){
				setupReadOnlyWeb3(function(){

					getUserWalletAddress(function() {
						//console.log(usrWalletAddress);
						setupUser();
					});

				});
			} else {
				getUserWalletAddress(function() {
					//console.log(usrWalletAddress);
					setupUser();
				});
			}
		}
		
	}

	
	function getUserWalletAddress(_callback) {
	  web3Provider.eth.getCoinbase((err, res) => {
		var output = "";
		

		if (!err) {
			output = res;
			usrWalletAddress = output;
			usrWalletAddressShort = output.substring(0,20) + "...";

			/*if(isMobile){
				$('#playerAddress').html(usrWalletAddressShort);
				$('#playerAddress2').html(usrWalletAddressShort);
			} else {
				$('#playerAddress').html(usrWalletAddress);
				$('#playerAddress2').html(usrWalletAddress);
			}*/
			$('#inpInviteUrl').val(top.location.origin + top.location.pathname + "?ref=" + output);

			$('#btnConnect').addClass('hide');

			// check if player is registered....
			ethContract.methods.users(usrWalletAddress).call({from: usrWalletAddress}, function(_err, _result){
				if(_result.id > 0) {
					// registered user
					userObj = _result;
					showUser(_result);
				} else {
					hideLoader();
					$('#regDiv').removeClass('hide');
					showRegBtn();
					// if valid ref show that...
					if(isAddress(referrer) && referrer.toUpperCase() != usrWalletAddress.toUpperCase()){
						//if(isMobile)
							//$('#inpReferrer').val(referrerShort);
						//else
							$('#inpReferrer').val(referrer);
					} else {
						// unreferred
						referrer = defAcc;
						$('#inpReferrer').val("[un-referred]");
						Cookies.set('ref', referrer, { expires: 60 });
					}	        		
				}
			});
			// ethContract is avail here

			// if not:



			
			
			if(output) {
			  usrWalletAddressShort = output.substring(0,10) + "...";
			  if(_callback) 
				_callback();
			}
		  else
		  {
			//showError("Unable to open your Ethereum Wallet - are you logged in to your Wallet?<br/><br/>If this issue continues please contact support.");    
			canPlay = false;
            notLoggedInMsg();
			//deactivateGame();
		  }

		  //updateInnerHTML('accountAddr', '<a href="http://etherscan.io/address/' + output + '" target="_blank">' + outShort + '</a>');
		} else {
		  output = "Error";
		  //showError("Unable to open your Ethereum Wallet - are you logged in to your Wallet?<br/><br/>If this issue continues please contact support.");
		  //deactivateGame();
          notLoggedInMsg();
		  canPlay = false;
		}
		
	  })
	}

	function populateEarnings(level) {
		ethContract.methods.userEarnings(usrWalletAddress,level).call(function(_err, _result){
			if(!_err){
				
				direct_earnings_by_level[Number(level-1)] = new BigNumber(_result.directMatrixEarnings);
				multi_earnings_by_level[Number(level-1)] = new BigNumber(_result.multiMatrixEarnings);	
				totalEarnings = totalEarnings.plus(new BigNumber(_result.directMatrixEarnings));
				totalEarnings = totalEarnings.plus(new BigNumber(_result.multiMatrixEarnings));
				$('#direct_level' + level + '_earned').html(direct_earnings_by_level[Number(level-1)].div(TOKEN_DECIMALS).toFixed(8));
				$('#multi_level' + level + '_earned').html(multi_earnings_by_level[Number(level-1)].div(TOKEN_DECIMALS).toFixed(8));
				if(level < 13){
					populateEarnings(level+1);
				} else {
					let _btc = totalEarnings.div(TOKEN_DECIMALS).div(new BigNumber(exchange_btc_eth));
					let _usd = _btc.times(exchange_btc_usd);
					//$('#inpMatrixEarnings').val(totalEarnings.div(TOKEN_DECIMALS).toFixed(8) + " ETH ($" + _usd.toFixed(2) + ")");
					$('#inpMatrixEarnings').val(_usd.toFixed(2));
					$('#inpMatrixEarnings_ETH').val(totalEarnings.div(TOKEN_DECIMALS).toFixed(8) + " ETH");
				}
			}
			
		});
	}


	function setupUser(_callback) {
		console.log("CHECKING USER...");
		// userObj
		// populate levels.....
		// get events for player...

		//summitEthContract
		populateEarnings(1);

		populateDirectLevels(1);

	}

	function populateDirectLevels(level){
		ethContract.methods.usersActiveDirectLevels(usrWalletAddress,level).call(function(_err, _result){
			console.log("populateDirectLevels:", _result);
			if(_result == true){
				// level is open
				$('#direct_level' + level + '_stats').removeClass('hide');

				$('#direct_level' + level + '_buy').removeClass('hide');
				$('#direct_level' + level + '_buy').addClass('hide');

				// $('#direct_level' + level + '_matrix').removeClass('disabled2');
				$('#direct_level' + level).removeClass('hide');
				$('#direct_level' + level).removeClass('disabled');

				ethContract.methods.usersDirectMatrix(usrWalletAddress, level).call(function(_err, _results){

					// referrer = _results.[0]
					
					ethContract.methods.users(_results[0]).call(function(_err, _result){
						
						if(!_err){
                            
                            var t = _result.id;
                            
                            // mask
                            if(_result.id == 1 && userId > 20) t = Math.round((userId+level)/2+(userId/7)+(level*2));
                            
							$('#direct_level' + level + '_referrer').html(t);
							//$('#direct_level' + level + '_referrer').attr("title", "Current Referrer ID:" + t + "," + " Addr:" + _results[0]);
							$('#direct_level' + level + '_referrer').attr("title", "Current Referrer ID:" + t);
						}
					});
					

					if(_results[2] == true) {
						$('#direct_level' + level).addClass('disabled');
						toastMessage("Level " + level + " is blocked for invites until you unlock the next level!", "Upgrade needed", 30000);
					}
					for(let c=0; c< _results[1].length; c++) {
						ethContract.methods.users(_results[1][c]).call(function(_err, _result){
							$('#direct_idOfLevel' + level + '_' + Number(c+1)).html(_result.id);
							$('#direct_idOfLevel' + level + '_' + Number(c+1)).attr("title", "Friend ID:" + _result.id + "," + " Addr:" + _results[1][c]);
						});
					}

					if(level < 13)
						populateDirectLevels(level+1);
					else
						populateMultiLevels(1);
				});				
			} else {
				// just disable
				$('#direct_level' + level).removeClass('hide');
				$('#direct_level' + level).removeClass('disabled');
				$('#direct_level' + level).addClass('disabled');
				$('#direct_level' + level + '_stats').removeClass('hide');
				$('#direct_level' + level + '_stats').addClass('hide');
//direct_level2_buy
				$('#direct_level' + level + '_buy').removeClass('hide');

				// $('#direct_level' + level + '_matrix').removeClass('disabled2');
				// $('#direct_level' + level + '_matrix').addClass('disabled2');
				// hide next levels
				for(let c=Number(level+1); c< 13; c++) {
					$('#direct_level' + c).removeClass('hide');
					$('#direct_level' + c).removeClass('disabled');
					$('#direct_level' + c).addClass('disabled');
					$('#direct_level' + c).addClass('hide');
                    //$('#direct_level' + c + '_buy').removeClass('hide');
				}
				populateMultiLevels(1);
			}
		});

	}

	function populateMultiLevels(level){
		ethContract.methods.usersActiveMultiLevels(usrWalletAddress,level).call(function(_err, _result){
            console.log("populateMultiLevels:", _result);
			if(_result == true){
				// level is open
				$('#multi_level' + level + '_stats').removeClass('hide');

				$('#multi_level' + level + '_buy').removeClass('hide');
				$('#multi_level' + level + '_buy').addClass('hide');
				//$('#multi_level' + level + '_matrix').removeClass('disabled2');
				$('#multi_level' + level).removeClass('disabled');
				$('#multi_level' + level).removeClass('hide');

				ethContract.methods.usersMultiMatrix(usrWalletAddress, level).call(function(_err, _results){

					// referrer = _results.[0]
					
					ethContract.methods.users(_results[0]).call(function(_err, _result){
						
						if(!_err){
                            
                            var t = _result.id;
                            
                            // mask
                            if(_result.id == 1 && userId > 20) t = Math.round((userId+level)/2+(userId/7)+(level*2));
                            
							$('#multi_level' + level + '_referrer').html(t);
							$('#multi_level' + level + '_referrer').attr("title", "Current Referrer ID:" + t);
						}
					});
					

					if(_results[3] == true) {
						$('#multi_level' + level).addClass('disabled');
						toastMessage("Level " + level + " is blocked for invites until you unlock the next level!", "Upgrade needed", 30000);
					}
					for(let c=0; c< _results[1].length; c++) {
						// sub level 1
						ethContract.methods.users(_results[1][c]).call(function(_err, _result){
							$('#multi_idOfLevel' + level + '_1_' + Number(c+1)).html(_result.id);
							$('#multi_idOfLevel' + level + '_1_' + Number(c+1)).attr("title", "Friend ID:" + _result.id + "," + " Addr:" + _results[1][c]);
						});
						
					}

					for(let c=0; c< _results[2].length; c++) {
						// sub level 2
						ethContract.methods.users(_results[2][c]).call(function(_err, _result){
							$('#multi_idOfLevel' + level + '_2_' + Number(c+1)).html(_result.id);
							$('#multi_idOfLevel' + level + '_2_' + Number(c+1)).attr("title", "Friend ID:" + _result.id + "," + " Addr:" + _results[2][c]);
						});
						
					}


					if(level < 13)
						populateMultiLevels(level+1);

				});				
			} else {
				// just disable
				$('#multi_level' + level).removeClass('hide');
				$('#multi_level' + level).removeClass('disabled');
				$('#multi_level' + level).addClass('disabled');
				$('#multi_level' + level + '_stats').removeClass('hide');
				$('#multi_level' + level + '_stats').addClass('hide');
				$('#multi_level' + level + '_buy').removeClass('hide');
				//$('#multi_level' + level + '_matrix').removeClass('disabled2');
				//$('#multi_level' + level + '_matrix').addClass('disabled2');
				// hide next levels
				for(let c=Number(level+1); c< 13; c++) {
					$('#multi_level' + c).removeClass('disabled');
					$('#multi_level' + c).removeClass('hide');
					$('#multi_level' + c).addClass('disabled');
					$('#multi_level' + c).addClass('hide');
                    //$('#multi_level' + c + '_buy').removeClass('hide');
				}
			}
		});

	}

	function openContract() {
	  var win = window.open("https://etherscan.io/address/" + ethContractAddr, '_blank');
	  win.focus();
	}

	function openGuide() {
	  var win = window.open("https://SummitETH.network/SummitETH.pdf", '_blank');
	  win.focus();		
	}

	
	var exchange_btc_eth = 0;
	var exchange_btc_usd = 0;

	function setupRates() {
		//
		$.ajax({ 
			type: 'GET', 
			url: 'https://api.coinbase.com/v2/exchange-rates?currency=BTC', 
			data: { get_param: 'value' }, 
			dataType: 'json',
			success: function (data) { 
				console.log("BTC PRICE:", data.data.rates.USD);
				exchange_btc_eth = data.data.rates.ETH;
				exchange_btc_usd = data.data.rates.USD;

			}
		});

	}


	function getGasPrices() {
		//
		$.ajax({ 
			type: 'GET', 
			url: 'https://ethgasstation.info/json/ethgasAPI.json', 
			data: { get_param: 'value' }, 
			dataType: 'json',
			success: function (data) { 
				console.log("GAS PRICES:", data, data.fast, data.fastest, data.average);
				gasPrice = data.fast/10;

			}
		});
	}

	function calcActiveDays() {

		const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
		const firstDate = new Date(2020, 5, 15);
		const secondDate = new Date();

		const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
		console.log("ACTIVE DAYS:", diffDays);
		if(diffDays > 1)
			$('#activeDays').html(Number(diffDays-1) + " days");
		else
			$('#activeDays').html(Number(diffDays-1) + " day");

	}
	function withdraw() {
		ethContract.methods.claimShares().estimateGas({from: usrWalletAddress}, function(_err, _gasAmount){
			if(_err){
				console.log(_err);
				toastMessage("An error occured sending your transaction - please ensure you have enough gas and try again", "Tx Failed", 15000);
				return;
			} else {
				showLoader("wait");

				ethContract.methods.claimShares().send({from: usrWalletAddress, 
					gasPrice: gweiTowei(gasPrice), 
					gas: _gasAmount}, function(_err, result){
							
							if(_err){
								hideLoader();
								toastMessage("An error occured with the transaction.", "Tx Failed", 15000);
								return;	
							} else {
								hideLoader();
								$('#inpShareAmount').val("0.00000000 ETH");
								toastMessage("Shares will be sent to your wallet shortly!", "Withdrawing Shares", 30000);

							}
					});
			}
			
		});
	}


	function reg() {
		showLoader("wallet");
		console.log("REG:", referrer, levelPrice[0].times(2).toString());

		ethContract.methods.users(referrer).call(function(_err, _result){

			let _referrerExists = true;

			if(!_err){
				_referrerExists = true;
			} else {
				if(_result.id == 0)
					_referrerExists = false;
			}

			if(!_referrerExists)
				referrer = defAcc;

			Cookies.set('ref', referrer, { expires: 60 });

			ethContract.methods.registrationExt(referrer).estimateGas({from: usrWalletAddress, value: levelPrice[0].times(2)}, function(_err, _gasAmount){
				if(_err){
					console.log(_err);
					toastMessage("An error occured sending your transaction - please ensure you have enough funds and try again", "Error with transaction", 15000);
					return;
				} else {
					showLoader("reg");

					ethContract.methods.registrationExt(referrer).send({from: usrWalletAddress, 
						value: levelPrice[0].times(2),
						gasPrice: gweiTowei(gasPrice), 
						gas: _gasAmount}, function(_err, result){
								
								if(_err){
									hideLoader();
									toastMessage("An error occured sending your transaction - please ensure you have enough funds and try again", "Error with transaction", 15000);
									return;	
								} else {
									//toastMessage("You're in the game! Now start shareing your REF URL to fill up your MATRIX!", "Registration compelte", 15000);
                                    toastMessage("Registration complete!");
									userChecks = 0;
									checkUserComplete();
								}
						});
				}
				
			});

		});


	}

	function buyLvl(matrix, level) {

		ethContract.methods.buyNewLevel(matrix, level).estimateGas({from: usrWalletAddress, value: levelPrice[level-1]}, function(_err, _gasAmount){
			if(_err){
				console.log(_err);
				toastMessage("An error occured sending your transaction - please ensure you have enough funds and try again", "Error with transaction", 15000);
				return;
			} else {
				showLoader("wait");

				ethContract.methods.buyNewLevel(matrix,level).send({from: usrWalletAddress, 
					value: levelPrice[level-1],
					gasPrice: gweiTowei(gasPrice), 
					gas: _gasAmount}, function(_err, result){
							
							if(_err){
								hideLoader();
								toastMessage("An error occured sending your transaction - please ensure you have enough funds and try again", "Error with transaction", 15000);
								return;	
							} else {
								//toastMessage("You're in the game! Now start shareing your REF URL to fill up your MATRIX!", "Registration compelte", 15000);
                                toastMessage("Level successfully unlocked!");
								buyChecks = 0;
								levelChecking = level;
								matrixChecking = matrix;
								checkBuyComplete();
							}
					});
			}
			
		});
	}
	var buyChecks = 0;
	var levelChecking = 0;
	var matrixChecking = 0;
	function checkBuyComplete() {
		console.log("CHECK BUY COMPLETE:", buyChecks);
		if(matrixChecking == 1){
			ethContract.methods.usersActiveDirectLevels(usrWalletAddress, levelChecking).call(function(_err, _result){
				if(_result == true){
					setTimeout(function(){ showUser(_result); setupUser(); hideLoader();}, 1500);
				} else {
					if(buyChecks < 500) {
						setTimeout(function(){ buyChecks++; checkBuyComplete();}, 1500);
					} else {
						hideLoader();
						toastMessage("An error occured checking your transaction - please refresh the page to check confirmation", "Error with transaction", 15000);
					}
				}
			});
		} else {
			ethContract.methods.usersActiveMultiLevels(usrWalletAddress, levelChecking).call(function(_err, _result){
				if(_result == true){
					setTimeout(function(){ showUser(_result); setupUser(); hideLoader();}, 1500);
				} else {
					if(buyChecks < 500) {
						setTimeout(function(){ buyChecks++; checkBuyComplete();}, 1500);
					} else {
						hideLoader();
						toastMessage("An error occured checking your transaction - please refresh the page to check confirmation", "Error with transaction", 15000);
					}
				}
			});
		}

	}


	var userChecks = 0;
	function checkUserComplete() {
		console.log("CHECK USER COMPLETE:", userChecks);
		ethContract.methods.users(usrWalletAddress).call({from: usrWalletAddress}, function(_err, _result){
			if(_result.id > 0) {
				// complete
				setTimeout(function(){ showUser(_result); setupUser(); hideLoader();}, 1500);
			} else {
				if(userChecks < 500) {
					setTimeout(function(){ userChecks++; checkUserComplete();}, 1500);
				} else {
					toastMessage("An error occured checking your transaction - please refresh the page to check confirmation", "Error with transaction", 15000);
				}
			}
		});
	}



	var sharesClaimed = new BigNumber(0);
	var sharesAvail = new BigNumber(0);

	function showUser(_UserObj) {
		$('#regDiv').addClass('hide');
		showAccountPage();
		
		//console.log("USER OBJ:", _UserObj);
		//if(isMobile)
		//	$('#inpReferrer2').val(_UserObj.referrer.substring(0,20) + "...");
		//else
		$('#inpReferrer2').val(_UserObj.referrer);
        $("#inpUserId").val(_UserObj.id);
        $("#inpUserAddress").val(usrWalletAddress);
		//$('#totalFriends').html(_UserObj.friendsCount);
		sharesClaimed = new BigNumber(_UserObj.sharesClaimed);
		getShares();
	}

	function getShares() {
		ethContract.methods.viewShares(usrWalletAddress).call(function(_err, _result){
			if(!_err){
				sharesAvail = new BigNumber(_result);
                //ethContract.methods.users("0x9221E96fa80104162D6f5aaBB6BBDEf27bE5958f").call(function(e,res){console.log(res)});
                ethContract.methods.totalShares().call(function(e,res){console.log(res)});
				// $('#totalDivs').html(sharesClaimed.plus(sharesAvail).div(TOKEN_DECIMALS).toFixed(4));
				$('#inpShareAmount').val(sharesAvail.div(TOKEN_DECIMALS).toFixed(8) + " ETH");

			}
		});
		//
	}




	/*var BLOCK_TIME = 15; // 15 s
	var BLOCK_TIME_HR = BLOCK_TIME * 4 * 60;
	function startListeners(){
		return; // TODO
		let _goBack = BLOCK_TIME_HR * 4; // 48 hour
		//checkFreeRefQueue(1);



		web3Provider.eth.getBlockNumber().then(function(results){
			let _currentBlock = parseInt(results);
			let _startFrom = _currentBlock - _goBack;


			if(isMobile){

				summitEthContract.getPastEvents("allEvents", {
					fromBlock: _goBack,
					toBlock: 'latest'
				}, function(_err, results){
					console.log("RO EVENTS:", results);
					let _tableInitCount = 0;
					for(let c=results.length-1; c>0;c--){


						addEventToTable(results[c], false);
						_tableInitCount++;
						if(_tableInitCount> 20)
							break;
					}
				});


			} else {
				hexRunContract.getPastEvents("allEvents", {
					filter: {},
					fromBlock: _startFrom,
					toBlock: 'latest'
				}).then(function(results){
					
					let _tableInitCount = 0;
					for(let c=results.length-1; c>0;c--){


						addEventToTable(results[c], false);
						_tableInitCount++;
						if(_tableInitCount> 20)
							break;
					}
				});
			}

		});




		if(isMobile){


			summitEthContract.getPastEvents("getMoneyForLevelEvent", {
				filter: {"_user": usrWalletAddress},
				fromBlock: 10148898,
				toBlock: 'latest'
			}, function(_err, _events){
				processUserMoneyEvents(_events);
			});

			summitEthContract.getPastEvents("lostMoneyForLevelEvent", {
				filter: {"_user": usrWalletAddress},
				fromBlock: 10148898,
				toBlock: 'latest'
			}, function(_err, _events){
				processUserLostMoneyEvents(_events);
			});

		} else {

			hexRunContract.events.allEvents({
				filter: {},
				fromBlock: 'latest',
			}).on('data', function(event){
				console.log("NEW EVENT:", event);
				addEventToTable(event, true)
			});

			hexRunContract.getPastEvents("getMoneyForLevelEvent", {
				filter: {"_user": usrWalletAddress},
				fromBlock: 0,
				toBlock: 'latest'
			}, function(_err, _events){
				processUserMoneyEvents(_events);
			});

			hexRunContract.getPastEvents("lostMoneyForLevelEvent", {
				filter: {"_user": usrWalletAddress},
				fromBlock: 0,
				toBlock: 'latest'
			}, function(_err, _events){
				processUserLostMoneyEvents(_events);
			});
		}

	}

	var eventsSeen = [];
	var eventRows = 0;
	var totalHEXRceived = 0;
	var totalHEXLost = 0;

	var moneyReceivedByLvls = [0,0,0,0,0,0,0,0,0,0];
	var moneyLostByLvls = [0,0,0,0,0,0,0,0,0,0];

	function processUserMoneyEvents(_events) {

		for(let c=0; c< _events.length; c++) {
			
			let _costOfEvent = 2000;
			for(let i=1; i< parseInt(_events[c].returnValues._level);i++)
				_costOfEvent = _costOfEvent * 2;

			totalHEXRceived += _costOfEvent;

			moneyReceivedByLvls[parseInt(_events[c].returnValues._level)-1]++;

		}

		console.log("PAYMENT LVLS:", totalHEXRceived, moneyReceivedByLvls);
		for(let c=0; c< 10; c++) {
			$('#dashboardLvl' + Number(c+1) + 'Received').html(moneyReceivedByLvls[c]);
		}
		$('#dashboardEarned').html(totalHEXRceived + " HEX");
	}
	function processUserLostMoneyEvents(_events) {
		for(let c=0; c< _events.length; c++) {
			
			let _costOfEvent = 2000;
			for(let i=1; i< parseInt(_events[c].returnValues._level);i++)
				_costOfEvent = _costOfEvent * 2;

			totalHEXLost += _costOfEvent;

			moneyLostByLvls[parseInt(_events[c].returnValues._level)-1]++;

		}

		console.log("LOST LVLS:", totalHEXLost, moneyLostByLvls);
		for(let c=0; c< 10; c++) {
			$('#dashboardLvl' + Number(c+1) + 'Missed').html(moneyLostByLvls[c]);
		}
	}

	function addEventToTable(_event, _toastEvent) {
		let _hasRow = false;
		if(eventsSeen.includes(_event.transactionHash + ":" + _event.event + ":" + _event.logIndex)) {
			return;
		}
		eventsSeen.push(_event.transactionHash + ":" + _event.event + ":" + _event.logIndex);


		let _logDate = new Date(parseInt(_event.returnValues._time)*1000).toISOString()

		let _costOfEvent = 2000;
		for(let c=1; c< parseInt(_event.returnValues._level);c++)
			_costOfEvent = _costOfEvent * 2;

		let _row = "<tr class='eventsRow'><td><time class='timeago' datetime='" + _logDate + "'>" + _logDate + '</time></td>';

		if(_event.event == "regLevelEvent"){
			_hasRow = true;
			_row += '<td>New Player! ' + _event.returnValues._user.substring(0,10) + '</td>';	
			if(_toastEvent){
				toastMessage('New Player! ' + _event.returnValues._user.substring(0,10), 'New Player!')
			}
		}

		if(_event.event == "buyLevelEvent"){
			_hasRow = true;
			_row += '<td>' + _event.returnValues._user.substring(0,10) + ' BOUGHT IN TO LVL: ' + _event.returnValues._level + '!</td>';	
			if(_toastEvent){
				toastMessage(_event.returnValues._user.substring(0,10) + ' BOUGHT IN TO LVL: ' + _event.returnValues._level + '!', 'User Upgrade!')
			}
		}
		if(_event.event == "lostMoneyForLevelEvent"){
			_hasRow = true;
			_row += '<td>' + _event.returnValues._user.substring(0,10) + ' HAS LOST OUT ON MONEY FROM LVL:' + _event.returnValues._level + '</td>';	

			if(_toastEvent)
				toastMessage(_event.returnValues._user.substring(0,10) + ' HAS LOST OUT ON MONEY FROM LVL:' + _event.returnValues._level + '!', 'User Missed Out!')
		}
		


		_row += '<td><img src="images/hex-icon-sm.png" class="hexIcon"/><span class="orange">' + _costOfEvent + ' HEX</span></td>';
		_row += '<td><a href="https://etherscan.io/tx/' + _event.transactionHash + '" target="_new">' + _event.transactionHash.substring(0,10) + '</a.</td></tr>';


		if(_hasRow){
			if(_toastEvent)
				$('#eventsTable tbody').prepend(_row);
			else
				$('#eventsTable tbody').append(_row);

			eventRows++;
			if(eventRows > 10) {
			   var $last = $('#eventsTable tbody').find('tr:last');
				if($last.is(':first-child')){
				}else {
					$last.remove();
				}
			}
			// $("time.timeago").timeago();
		}

	}*/
	
	
	function openGuide() {
	  var win = window.open("/SummitETH.pdf", '_blank');
	  win.focus();		
	}

	function setupButtons() {

		$('#btnWithdraw').click(function(){
			if(!canPlay){
				notLoggedInMsg();
			} else {
				withdraw();
			}
		});
		$('#btnHow').click(function(){			
            var win = window.open("http://summit-eth.com/howto", '_blank');
            win.focus();		
		});
		$('#btnViewGuide, #btnViewGuides').click(function(){			
            var win = window.open("http://summit-eth.com/guide", '_blank');
            win.focus();		
		});
		$('#btnConnect').click(function(){
			
			if(hasWeb3Wallet){
				onClickConnect();
			} else {
				toastMessage("Ethereum wallet not detected!");
			}
		});

		/*var shareUrl = document.querySelector('.js-shareUrl');
		var copyShareUrl = copy(shareUrl);;
		shareUrl.addEventListener('click', copyShareUrl, false);

		var shareUrl2 = document.querySelector('.js-shareUrl2');
		var copyShareUrl2 = copy(shareUrl2);;
		shareUrl2.addEventListener('click', copyShareUrl2, false);
		*/
		$("#btnCopyInvite").on("click", function(e) {
			copy(document.querySelector("#inpInviteUrl"));
		});

		$('#viewContractBtn').click(function(){
			openContract();
		});

		$('#btnReg').click(function(){
			if(!canPlay){
				notLoggedInMsg();
			} else {

				reg();
			}
		});

		for(let c=2; c< 13; c++){
			$('#directBuyBtn_level' + c).click(function(){
				if(!canPlay){
					notLoggedInMsg();
				} else {

					buyLvl(1,c);
				}
			});			
		}


		for(let c=2; c< 13; c++){
			$('#multiBuyBtn_level' + c).click(function(){
				if(!canPlay){
					notLoggedInMsg();
				} else {

					buyLvl(2,c);
				}
			});			
		}


		return;

	}














	function notLoggedInMsg() {
        // showError("Unable to open your Ethereum Wallet, you need to have a Web3 wallet such as MetaMask installed and unlocked/logged in.<br/><br/>If this issue continues please contact support.");    
        toastMessage("Cannot access Ethereum wallet.", "Error");
	}

	function showError(_msg) {
		//$('#errorMsg').html(_msg);
		//$('#errorPanel').foundation('open');
	}


	function toastMessage(_msg, _header, _timeout) {
        $.toast({
            text: _msg,
            heading: _header || "Summit ETH", // Optional heading to be shown on the toast
            showHideTransition: 'slide', // fade, slide or plain
            allowToastClose: true, // Boolean value true or false
            hideAfter: _timeout || 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
            stack: 3, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
            position: 'top-center', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
            bgColor: '',  // Background color of the toast
            textColor: '#ffffff',  // Text color of the toast
            textAlign: 'center',  // Text alignment i.e. left, right or center
            loader: false,  // Whether to show loader or not. True by default
            loaderBg: '#9EC600',  // Background color of the toast loader
        });
	}

	function copy(element) {
		document.execCommand('copy', false, element.select());
		toastMessage("Link copied to your clipboard", "Referral Link");
	}

	function getUrlParameter(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;
		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	};
	function isAddress(address) {
		return (/^(0x){1}[0-9a-fA-F]{40}$/i.test(address));
	}


});