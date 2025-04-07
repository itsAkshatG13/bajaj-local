'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"splash_init_screen.png": "f79ee5afb3dd17a1dfac13acf01ffa7e",
"version.json": "7fd0ffdd3121a8ff4ab0cbe88f1a1b35",
"main.dart.js_12.part.js": "cce66a30a4c4cf8cf1a727e0860f3cc1",
"index.html": "90327754c04e77cb302ff37c08b0903f",
"/": "90327754c04e77cb302ff37c08b0903f",
"main.dart.js_13.part.js": "b220826a5aff091192d0f523207ab9e8",
"main.dart.js_11.part.js": "9662c9298a4f052da9f58bf00a2675d8",
"main.dart.js": "14166402b14fc2c6bea8645ea2c1efb0",
"main.dart.js_18.part.js": "4909bf46a25f2cda059665ac24c281a3",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js_5.part.js": "c2c1657032cc362e13ee0e0d5e3caf1e",
"main.dart.js_15.part.js": "b3044f1a9e2410bac1a93910460ba32b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"ic_launcher.png": "bcb68c99efe05678b9c1e614058d3f5c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "828d6121662a594a3e66bc3121c2420b",
"main.dart.js_14.part.js": "13a123782ccd84b75fc505465d915917",
"serviceworker.js": "1bb6ee0fe0c814fb30c8fbe7d9e203e8",
"main.dart.js_1.part.js": "05eacb5c12f488eb02bf81c0bb8c05df",
"main.dart.js_16.part.js": "2622379e8e94c0b44dfd87a44865f135",
"assets/AssetManifest.json": "795b2f783600c905d0e6fa08831dcada",
"assets/NOTICES": "43e4a38479df50835832c4701c7fcf65",
"assets/FontManifest.json": "850ffa64a123f8e942a249ee582660e2",
"assets/AssetManifest.bin.json": "f5b3bfb501969c9952fab2fa70d6b3ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d865ac9358da4e9bcc49296ac28c6ebf",
"assets/packages/flyy_flutter_plugin/assets/walletwidget.png": "0917a255a1127b1daabe688a6991cfeb",
"assets/packages/flyy_flutter_plugin/assets/offerswidget.png": "c21530ff49044e7e6c274772a261ec76",
"assets/packages/flyy_flutter_plugin/assets/confetti.png": "ddeacf4fbc74efffdb150c50ecd32a2d",
"assets/packages/flyy_flutter_plugin/assets/confetti_two.png": "d035934e278533aada29813319ab7f61",
"assets/packages/flyy_flutter_plugin/assets/rewardwidget.png": "1ede51f1c1f16cd20c5ea1c4cd7c64c0",
"assets/packages/flyy_flutter_plugin/assets/fonts/montserrat_regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"assets/packages/flyy_flutter_plugin/assets/reward.png": "d1dd151670681e61f60e85581cd68392",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/upi_pay/assets/apps/ios/com.google.paisa.png": "97c0f75dcd416077ff6526a5cb5aa57b",
"assets/packages/upi_pay/assets/apps/ios/com.jkbank.bhimjkbankupi.png": "56c14edf2ae11d616cf69761a5b94307",
"assets/packages/upi_pay/assets/apps/ios/kvb.app.upiapp.png": "0d78b8d30acd20332a14facf20de839a",
"assets/packages/upi_pay/assets/apps/ios/net.whatsapp.WhatsApp.png": "661d28c74ae9bace0ff86c20a0aea3e5",
"assets/packages/upi_pay/assets/apps/ios/com.upi.federalbank.org.lotza.png": "d73fd53043c8e6ebabe2ac4b6f3a25a0",
"assets/packages/upi_pay/assets/apps/ios/com.phonepe.PhonePeApp.png": "4963aa075c10d8fd14e193e74aba4e8c",
"assets/packages/upi_pay/assets/apps/ios/com.freecharge.ios.png": "d4ba535121579756a3c169815ee5bba0",
"assets/packages/upi_pay/assets/apps/ios/com.one97.paytm.png": "25e1349a48e9578b9cecb12c9bfdc2da",
"assets/packages/upi_pay/assets/apps/ios/com.truesoftware.TrueCallerOther.png": "7dbd592745665412ac6ef27624cd79b6",
"assets/packages/upi_pay/assets/apps/ios/com.mobikwik.png": "7c3fa11767f31b276fe7eb784887da2a",
"assets/packages/upi_pay/assets/apps/ios/com.UBI.BHIMUPI.png": "0332a92e916e5a7912e23898e91c3830",
"assets/packages/upi_pay/assets/apps/ios/com.ausmallfinancebank.aupay.bhimupi.png": "424f17213ad989bc14a2e2bdba992d75",
"assets/packages/upi_pay/assets/apps/ios/in.cointab.app.png": "aada1a5baf6c1bc986f81537132ed0b6",
"assets/packages/upi_pay/assets/apps/ios/com.vijayabank.UPI.png": "29784581062e5939d0eb32f2b585bf8a",
"assets/packages/upi_pay/assets/apps/ios/money.bullet.png": "812cce1533198f8ec4fa32cb09943ee1",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/moengage_inbox/config.json": "b9f4b9c71f9db763e31bb2d901f8bca3",
"assets/packages/moengage_flutter/config.json": "fc06228ac62261979cd17bfcbbfd820e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/assets/images/convert_icon.svg": "ac1c0fd0b6620dbbf788c933f27e5434",
"assets/lib/assets/images/video_thumbnail.svg": "56888697ad1fbbeae900d7fbdbc45a99",
"assets/lib/assets/images/rotate_icon.svg": "5dfdaa9bd5f79c5315d4de5b07734808",
"assets/lib/assets/images/menu_browse_activity.svg": "e42619ae8512966a2664921ce372e26f",
"assets/lib/assets/images/search.svg": "b380a1c556407aa96213b438db25b96b",
"assets/lib/assets/images/splash_init_screen.png": "f79ee5afb3dd17a1dfac13acf01ffa7e",
"assets/lib/assets/images/menu_explore.svg": "f8fd0f3d0310f162b8be259fdf84d576",
"assets/lib/assets/images/quote_bottom_like.svg": "c9ba906198b4847ad907a70b6c47f7c5",
"assets/lib/assets/images/pledge.svg": "3b7fb9d209fb7a84030a2dab6c98bdc1",
"assets/lib/assets/images/fund_transaction_account.svg": "57f1cb12dc86aebb53b6bb07566189e0",
"assets/lib/assets/images/upi.svg": "5cb7e6b6f9bac991af9e80588f28a6d5",
"assets/lib/assets/images/order_unselected.svg": "3e8829d61e91b586e3e5e61649875367",
"assets/lib/assets/images/edit_profile.svg": "341ce4d74709dfce84f3173cc8f056d6",
"assets/lib/assets/images/checkbox_outline.svg": "83257bed049c3c77bdf4fa177d271b8f",
"assets/lib/assets/images/no_data_position_.svg": "f20fda9386d83ef0f0bd3b9bba329e51",
"assets/lib/assets/images/las.png": "18f3de95cab9f32740fa2af44764a6c6",
"assets/lib/assets/images/notification_rv.svg": "d92adfb7c95ddeb8d836d30236143f08",
"assets/lib/assets/images/star_orange.svg": "a066714156d7cfd80c68204acc5baa09",
"assets/lib/assets/images/greater_than.svg": "aed0c01c5a580a532e8e4e49efaffda4",
"assets/lib/assets/images/addIcon_New.svg": "38cbea071dcb405a0eb96406cd7bd672",
"assets/lib/assets/images/pending_payment.png": "c43f494334ee2bd075e641be41a611d3",
"assets/lib/assets/images/savings.svg": "208be7c5cbbcc3bdc36a891f84b41fcd",
"assets/lib/assets/images/stocksip_placeholder_dark.svg": "90b2a58869970790f430c57e1be97d84",
"assets/lib/assets/images/unpledged.png": "d41a78038d8a6318b7305e9ab1e81782",
"assets/lib/assets/images/Tools.svg": "d128691e07131ce301fd2d9369746ca2",
"assets/lib/assets/images/moving.svg": "a0cfd50afa7cbe490edeb4e3280f20e0",
"assets/lib/assets/images/quote_bottom_basket.svg": "965414c3055cfcf39ef4853a05961947",
"assets/lib/assets/images/list_view.svg": "620d856e8d44c3acd3c4247d4e97fb79",
"assets/lib/assets/images/ltp_low.svg": "94e16b41f5707c8fea65f2f733137553",
"assets/lib/assets/images/newsplaceholder.svg": "8e3be56668606e69ee6a5c299375a1b8",
"assets/lib/assets/images/arrow_outward.svg": "e37607b723330b996c5e7d105ddfdaeb",
"assets/lib/assets/images/monitoring.svg": "c0a0134093e4363d963aeafba1076332",
"assets/lib/assets/images/select_watchlist_to_add_unselected.svg": "f0423d9eef8d13758714dff965e7178b",
"assets/lib/assets/images/mpin_icon.svg": "eeb2e16f186c217e826ab9c41ac8a0af",
"assets/lib/assets/images/search_place_holder.svg": "17306ca4c7cf0ecd54e2737032213852",
"assets/lib/assets/images/default_dashboard.svg": "8483f858b0753643c42a877609e03d0c",
"assets/lib/assets/images/add_notification.svg": "abe79e37a9c2d397930e09ae1b077a31",
"assets/lib/assets/images/added_watchlist.svg": "beb39cd36486eedab90a97495bbd8515",
"assets/lib/assets/images/menu_savings_active.svg": "c440d2338bfad53fa05dcdee09cc70a8",
"assets/lib/assets/images/place_order_failed.svg": "9950ecbb4a79942aa286dcfcbe03ed10",
"assets/lib/assets/images/no_alerts_dark.svg": "20a76ec6a85121488571fa55d8a421f0",
"assets/lib/assets/images/face_id.svg": "8b31e6736e823c37398d59b59d9ad3fd",
"assets/lib/assets/images/chart_up_notification.png": "a853ec8788949655732a57166d1682d6",
"assets/lib/assets/images/sort_selected.svg": "5c2447bb895ca103b7d0f40ed01597c3",
"assets/lib/assets/images/no_watchlist_light.svg": "b6470e0ab8a411821f8777786c6e6563",
"assets/lib/assets/images/get_margin.svg": "f515e4fe9a7339573d990174b3bdf4d6",
"assets/lib/assets/images/menu_book_active.svg": "d19dffe800067aaa6bb34ac76581fde1",
"assets/lib/assets/images/watchlist-sort-up-down.svg": "e43333c35908120ff096585ede0abb98",
"assets/lib/assets/images/stop_loss_position_icon.svg": "43b22e3ae7bdaab277e8c8dcbd91f4c6",
"assets/lib/assets/images/bad_icon.svg": "260aa4f8b707f122706d917977e76ec0",
"assets/lib/assets/images/basket_placeholder_dark.svg": "f0b0a9aa5610ca0b07fca38aca2112a9",
"assets/lib/assets/images/info_new_blue.svg": "7d31e8060af105f79320459fc8ba043d",
"assets/lib/assets/images/diwali_bg.png": "c6d77adf1a848715f522f03c4c9e23da",
"assets/lib/assets/images/failed_with_circle.png": "35af7852d108681672ecb357d906f9fc",
"assets/lib/assets/images/up-arrow-svgrepo-com.svg": "d9a196d1cb923730b545a4faf25be669",
"assets/lib/assets/images/logout.svg": "45d10763d7dff10f3cd6836c59affb7d",
"assets/lib/assets/images/scrip_added.svg": "8f9be59e808a2cafc7b23f0c4fdfdd7c",
"assets/lib/assets/images/radio_unselected.svg": "1e5fa54cc87cf94757373aeede3b0187",
"assets/lib/assets/images/guest.svg": "8ff043cf5808bc103f57d566fe6ba63c",
"assets/lib/assets/images/openSgb.svg": "fe02650c226b0c9bb44709a741ea04f5",
"assets/lib/assets/images/guest_dashboard_banner.png": "b5bf1d533d68b0d7dfb653f5fa5bc083",
"assets/lib/assets/images/menu_home.svg": "6ce01ff6c3ed10c59c661148b4bd5ae2",
"assets/lib/assets/images/orderfilter.svg": "bdb57509cde4c5bdafcfa90ae38d1f20",
"assets/lib/assets/images/rotate.svg": "a8c67be9638e9bb96a20b771eba2608a",
"assets/lib/assets/images/ddpi_gtt_icon.png": "d388312bb5e236d4d7731b63b2cd675c",
"assets/lib/assets/images/research_alert.svg": "a42a2bf6b2bb8cf7c6d1c1bbb1ee0819",
"assets/lib/assets/images/Square_off_all.svg": "7641f00cf8375bfd6fa8e9640bf0f390",
"assets/lib/assets/images/convert_arrow_dark.svg": "804d1ef194afabe690d87d1a5d4ad62c",
"assets/lib/assets/images/no_watchlist_dark.svg": "16efe589c733d2f92676ea732ef4b24c",
"assets/lib/assets/images/back_arrow.svg": "f003a7a9640cf560e3697af204ae40cb",
"assets/lib/assets/images/drag.svg": "208030e116dfd23c710ed78bbf4318a5",
"assets/lib/assets/images/percentage_down.svg": "be7b06023019bda761e0d82cfa32af77",
"assets/lib/assets/images/refresh_chart.svg": "bcafe9ad46f30020c731467e944a03e7",
"assets/lib/assets/images/menu_currency_rupee_circle_active.svg": "01497d48096c9c0b66c44222758ee8fb",
"assets/lib/assets/images/buy_arrow.svg": "210e530bba2e4653ac59b48aac087912",
"assets/lib/assets/images/chart_rv.svg": "c1ea33cd31aa24a41f6d09806bcc7a90",
"assets/lib/assets/images/ledger_report_account.svg": "d44c12d7d6f5a5ad3fe92066173d2b08",
"assets/lib/assets/images/edis_sucess.svg": "3a3c0984af07ef3b808b1f6df1978a24",
"assets/lib/assets/images/expand_chart.svg": "fa09a96d7252f974d8373f27b3a95631",
"assets/lib/assets/images/right_arrow.svg": "a16560590be68c4874308e4e57b2c42a",
"assets/lib/assets/images/Minimum_Loan.svg": "6ec7967285b0ff120a37e5d62b3c614e",
"assets/lib/assets/images/addfund.svg": "bb5e346b01b2903ab5d4a4c65ea41972",
"assets/lib/assets/images/login_banner.png": "ee1338eb4fcd392c61bd2c0584075035",
"assets/lib/assets/images/feedback_menu_icon.svg": "fbfecb07eb817f6abd51e1afa4510359",
"assets/lib/assets/images/edit_icon.svg": "6f3cde29ae9ac7f24a64c7ed1303ae28",
"assets/lib/assets/images/default_rv.svg": "66fb372d06f35a02646af7c6ab99f638",
"assets/lib/assets/images/bag-office.svg": "fbd65b89587c123cf5e12d1bba58c0c6",
"assets/lib/assets/images/manage_watchlist_icon.svg": "f931390f202350982bdbb5ce08c65bcd",
"assets/lib/assets/images/less_than_equal.svg": "01dff65f65352d7cac75f0f3aa1b068f",
"assets/lib/assets/images/gpay.png": "c7cb9f7926f1767f118cc9b5ae74a0b7",
"assets/lib/assets/images/convert_position_icon.svg": "f9da9b78b6dd1839ba19f402f63a7799",
"assets/lib/assets/images/transfer_fund.svg": "83e497c0025a23dda41a901373cabae0",
"assets/lib/assets/images/portfolio_analyse.png": "06cb6b3e34c7ad265bd5b61d5e18b1d7",
"assets/lib/assets/images/watchlist_selected.svg": "1c2c42ac6604d5a19e40b736abf97207",
"assets/lib/assets/images/splash_new_bg_1.png": "ed5ddf82745906b135dff21152b77c6c",
"assets/lib/assets/images/qty_increase.svg": "fb3dddd1df74aed04b4502d481ab24f2",
"assets/lib/assets/images/basket_success.png": "2546f460acb2e1065eee403f7f2c0033",
"assets/lib/assets/images/portfolioV2.svg": "6140e3ade55e49057cb0da56c6ab6fe0",
"assets/lib/assets/images/otp_identifier.svg": "b59ee7398ce4555e9e31a8d9e349b34b",
"assets/lib/assets/images/menu_account_circle.svg": "4168ee18bc0cfcb89a905ef549fbc7f5",
"assets/lib/assets/images/no_alerts_light.svg": "31943477abba5272574367b50d275af0",
"assets/lib/assets/images/news_notification.png": "557af5a1ed1a956476b86b15f2ab31ec",
"assets/lib/assets/images/no_baskets.svg": "232fcc2526375e3c700bc66b7956048b",
"assets/lib/assets/images/delete_popup_confirmation.svg": "e5fa950c0c0b0a171199548ada006f15",
"assets/lib/assets/images/Group%2520238535%2520(1).svg": "dedf44d1528b76dfbb664c6252119662",
"assets/lib/assets/images/market_selected.svg": "cd4f2f1eb1b9025e99951e06b2798ce8",
"assets/lib/assets/images/stop_loss_icon.svg": "00f2093ee432a23a0c9edafe43941cfb",
"assets/lib/assets/images/eye_closed.svg": "802f14f8ceccdf1ae59eab0153f4678f",
"assets/lib/assets/images/indian_flag_rounded.png": "1d613d44e8b4e02271f9723587e28c4b",
"assets/lib/assets/images/menu_bookmark_active.svg": "9b07854fa038c2732935741ffac07a2a",
"assets/lib/assets/images/play_store@3x.png": "79f4aa3d26070ed01ab4b086f3ebdd99",
"assets/lib/assets/images/search_close.svg": "4a923af9645a6f6e7ccef21e5808578d",
"assets/lib/assets/images/move_selection_down.svg": "2da0a3c1ac73fd64cfb95ed6dfa4b8a5",
"assets/lib/assets/images/key_benefit_4.png": "d99d1bad9dd50fbfa470d5c0064b2979",
"assets/lib/assets/images/splash_new_bg_2.png": "2ee646a56356bf3a2b58385415b86773",
"assets/lib/assets/images/settings.svg": "52cdc86639f32ff744429181c44cd7ee",
"assets/lib/assets/images/touch_icici.png": "324ff581e9436df7682d969f3b738eb1",
"assets/lib/assets/images/ellipse.svg": "ece7bc5721ec8ab9c17e7a40095ccfb9",
"assets/lib/assets/images/bpc.png": "618be81c581329f16bd7f0a191653a99",
"assets/lib/assets/images/account_balance.svg": "4c8b756081c7d8e34fe4afa42d3f838c",
"assets/lib/assets/images/cancel.png": "1d420e8de27bc791cdfd90ed36600b22",
"assets/lib/assets/images/menu_book.svg": "4a75e3d54c5507c9046dec51c564e668",
"assets/lib/assets/images/ipo.svg": "6c3435ef16fd0060cc0a7acff5a48817",
"assets/lib/assets/images/language_login.svg": "ef6469a3d9bee930d3228b1a2d8f158c",
"assets/lib/assets/images/download.svg": "8934674e6ed05d6677bdbba1cb4ad7f2",
"assets/lib/assets/images/no_deposit_light.svg": "cfc73c5b1d09211d0a00a1c3b3b870ea",
"assets/lib/assets/images/time.svg": "6e6225aa2371d3846c8269029750b34a",
"assets/lib/assets/images/face_login.svg": "d1e91fa60d96836c94c387bfc40a188a",
"assets/lib/assets/images/chart_icon.svg": "5cffef820caf927cc7c407ace97525ba",
"assets/lib/assets/images/automate_sip.svg": "444395738c4a2676eccb0cf061ef991c",
"assets/lib/assets/images/trade_details.svg": "a9db3e20ed277a40b5de336a58c1c6cc",
"assets/lib/assets/images/orders_placeholder_light.svg": "1c94bd870ae33618a72e8c7abbb54ee2",
"assets/lib/assets/images/splash_new_bg_3.png": "1cb24c4b7b2d3587dc833abeab925c1b",
"assets/lib/assets/images/key_benefit_5.png": "989dcda7f383c7d45abad913199c42bc",
"assets/lib/assets/images/quote_bottom_set_alert.svg": "bd8eba70983ba3fa348a576589ffde17",
"assets/lib/assets/images/scrip_not_added.svg": "0cb56460ea613dc1796abda6a032f5f2",
"assets/lib/assets/images/checkbox_unselected.svg": "96c1f26ec2cba69b4269d6f970173d40",
"assets/lib/assets/images/delete_red.png": "aee90601d2cc5c6fc4683b9fd6ae3666",
"assets/lib/assets/images/key_benefit_1.png": "dcac3a3e661db7bc18ab5af50c54dd4b",
"assets/lib/assets/images/success_new_icon.svg": "2c220bc809345c768ea148461aebdbeb",
"assets/lib/assets/images/language_rv.svg": "dae2ba7e1a9dccdfcb06d2a389069bd6",
"assets/lib/assets/images/menu_shopping_bag.svg": "b816018ceb526b42fee7893862a02a3e",
"assets/lib/assets/images/subs_outlined_png.png": "9bbeec45903b668769cea40186fa5238",
"assets/lib/assets/images/market_smith.svg": "49b6efa13ac766c88737413784c3f919",
"assets/lib/assets/images/orders_unselected.svg": "c8dce0fa625e576f5cfd1728416b1ff8",
"assets/lib/assets/images/bg_celebration@2x.png": "e085fc0dfa44ce301445704f74fca5a7",
"assets/lib/assets/images/open_sgb.png": "ce57817fb9f19aa1c20397d43d3669b9",
"assets/lib/assets/images/success_status_dark.png": "d733ce62c9338fb5ba8c228ee6a1df1d",
"assets/lib/assets/images/guest_bottom_banner.png": "e9bc0efebc6446457c165039b5e3ec32",
"assets/lib/assets/images/menu_home_active.svg": "e558cdbef7755862baf6115cd52a4d8d",
"assets/lib/assets/images/market_depth_blur.svg": "e7d837cff14844a1fc2a51a30d19d42d",
"assets/lib/assets/images/quote_bottom_add_to_watchlist.svg": "4ab11093b58bacab5334309853163704",
"assets/lib/assets/images/update_income_notification.svg": "ed6c038ba3759a434ace0a28c0e723b8",
"assets/lib/assets/images/basket_placeholder_light.svg": "335794f8bddeaf36c7e4a8df5ca592f1",
"assets/lib/assets/images/qty_decrease.svg": "78f87b895b6e3282f4159a5683dfc6b7",
"assets/lib/assets/images/account_circle.svg": "5315117b131d6d3a5e7a13e2ffa7d1bc",
"assets/lib/assets/images/add_selected_blue.svg": "0f1b6b04701ad89c4f0ca2bccf83efc2",
"assets/lib/assets/images/insightsV2.svg": "22c89539c2cb615e864cc36627afa277",
"assets/lib/assets/images/sort-alphabet-descending.svg": "2f0640155151a4c78215675e6bf3c420",
"assets/lib/assets/images/notif.png": "c67b8c4bae88c196083d2a1bf978672c",
"assets/lib/assets/images/key_benefit_2.png": "e8ab3b272c34c814bd51ad1bd3cfa3ef",
"assets/lib/assets/images/version_udate_light.svg": "145e2c2bf9fd3a3d3259cdeb3ca45cc1",
"assets/lib/assets/images/ipo_banner.jpg": "510146125f07406bb29a7b81c665a253",
"assets/lib/assets/images/splash_new_bg_4.png": "07c48fcdcd198d0b3fa792356555c307",
"assets/lib/assets/images/freedom_pack.png": "309c89b068f860131835d838e42012f9",
"assets/lib/assets/images/event_upcoming.svg": "54ed367f0bc0728c652e3cf02ba6cf0d",
"assets/lib/assets/images/payment_failed.png": "85a09dd0c40abde38e44f086ec420658",
"assets/lib/assets/images/happy_diwali.png": "ee1885af56570e69ee1f688f1301ebd1",
"assets/lib/assets/images/optionChain.svg": "3a72e18097c31edc0c39e833779fea6b",
"assets/lib/assets/images/mail_help.svg": "74a51c370b71de0ac209fbbc9e2235de",
"assets/lib/assets/images/pop_up_white_close.svg": "96eb4e29f4cb2fc257e022f303aa1d8b",
"assets/lib/assets/images/global.svg": "7a0deafa63cb45ccd875ec6b10ec72cf",
"assets/lib/assets/images/average_icon.svg": "bca84265698b83d87f0f352c05a26678",
"assets/lib/assets/images/bajaj_finserv_logo.png": "18d160e2c1d690754c2bd7505c4a8b25",
"assets/lib/assets/images/BFSL_app_icon.png": "6696f68db4b7fa24693bb2133a88da76",
"assets/lib/assets/images/down_arrow.svg": "70fc322122e039b00a736e1663102500",
"assets/lib/assets/images/tradingview.png": "135ded73334815a7cb5e52fa86c2ff5f",
"assets/lib/assets/images/change_mpin_rv.svg": "9ead25afda58e72a0fe55ac5bf0ce1f8",
"assets/lib/assets/images/appStore.png": "e46e77a01703922c1c42120ac56f4fa7",
"assets/lib/assets/images/vested.png": "bc49945489fa0c3dc1a6ecae8ab39941",
"assets/lib/assets/images/subs_white.svg": "8cf677f86cf0ecc7f51cc32a158f97a3",
"assets/lib/assets/images/sort-alphabet-ascending.svg": "8bf7af5fd249c9a77e9bc83a2605931b",
"assets/lib/assets/images/news.svg": "a5e5e964a309509c28a546ed90443b43",
"assets/lib/assets/images/pro_pack.png": "5050b39414deccbb8b95a0ce7c17196f",
"assets/lib/assets/images/key_benefit_3.png": "522c4e76a4f8816d46a9dba1d1aaf5e8",
"assets/lib/assets/images/add.svg": "092e47ac6987edb53c1575cc3c64d617",
"assets/lib/assets/images/menu_bookmark.svg": "9d91639f4cad040a79d7fcd0938e7434",
"assets/lib/assets/images/edit_watchlist_icon.svg": "c482305fca35ed0d3fc097be1a809393",
"assets/lib/assets/images/close.svg": "9ad4425b3a117285eb208469b1f19dea",
"assets/lib/assets/images/microphone-svgrepo-com.svg": "8ba2b96ab507b262c2a0f1a6ff627f92",
"assets/lib/assets/images/update_income.svg": "0136814b568d8cbb29184ef9505ff88c",
"assets/lib/assets/images/copy.svg": "7ecea0ec3a1520c69d295a0a8eff7bf9",
"assets/lib/assets/images/qty_high_low.svg": "4d20bf4a8cfb55105d3fbef7bdc72a96",
"assets/lib/assets/images/info_new.svg": "4c91881e4039e9f9171b5774f39cc1e7",
"assets/lib/assets/images/equal_to.svg": "bc094fafaac93b7425c53618861089bd",
"assets/lib/assets/images/payment_success.png": "3c39c2dfc996fcd00cf46f90ba0ddaed",
"assets/lib/assets/images/one_million_happy_customers.svg": "49eba5f2a34923a192c2cd92ebb88841",
"assets/lib/assets/images/quote_bottom_details.svg": "107a383ab5550fc0c7c4e3d17dce9185",
"assets/lib/assets/images/no_content_svg.svg": "a4e1a33b8484128efc5c9921d2ea55cf",
"assets/lib/assets/images/ipo_bnner2.jpg": "ef8191706e37ab0936a1e10e19f447da",
"assets/lib/assets/images/sort_unselected.svg": "46ba878abf107199d53a9e97a400144e",
"assets/lib/assets/images/not_found.svg": "468e2795d57b3fa12020e33999f5bf07",
"assets/lib/assets/images/static_banner.png": "00f230594220ff76cbadbe3712210952",
"assets/lib/assets/images/marketsmith.png": "c84ff38fb05c87ecd0ed889d5be99b3d",
"assets/lib/assets/images/bajajbrokinglogo.svg": "38528ffa7253e8967b4ed51a18e4801f",
"assets/lib/assets/images/success_v2.svg": "5d350f03c01e9fd0e81430476aea191f",
"assets/lib/assets/images/currency_rupee_circle.svg": "4e57504f713a357f2c15788289eac6bf",
"assets/lib/assets/images/csv.svg": "66299b7fdba814b41cdd5126e62b08e5",
"assets/lib/assets/images/grid_view.svg": "b8da5e4b7f63bc14b2f8afc5e2ad1494",
"assets/lib/assets/images/mpin.svg": "befa612433d3a71822c831be650bcc49",
"assets/lib/assets/images/back.svg": "8700e9ce9318b762a75574270b6c8ea7",
"assets/lib/assets/images/menu_savings.svg": "32d7cea05892314247aeee817e5be461",
"assets/lib/assets/images/splash_new_bg.png": "7719e80b6c199468a106e14814a3f032",
"assets/lib/assets/images/person_icon.svg": "33176a99a32d14028bb53a1aaf96314c",
"assets/lib/assets/images/shield_check_splash.svg": "463ffdfd0863d2f89e111e240a8bda1e",
"assets/lib/assets/images/search_ipo.svg": "04f423ef5a22d00fd0903d3b6e0a65e1",
"assets/lib/assets/images/quick_assistance.svg": "bfc323d0ea4fbdebd0584664a98c63a4",
"assets/lib/assets/images/help_support_message.svg": "7316cca17f80f373c0faf269e46f1b21",
"assets/lib/assets/images/earthquake.svg": "a478083e2e72da5ef662e484cbba0b08",
"assets/lib/assets/images/fingerprint_with_circle.svg": "216c5a3366c822c8103b98ac9c8a82b8",
"assets/lib/assets/images/menu_explore_active.svg": "8eea522df9425ec08945c45e54d9f452",
"assets/lib/assets/images/vested_banner.png": "2c9c12e8563f0e3c1b075ca8d591fbbd",
"assets/lib/assets/images/profile_placeholder.png": "a55caec941dda8c72de11bff0eb3ea42",
"assets/lib/assets/images/delete_icon_popup.svg": "ee314d9eee1b7dd9b60e0c4f09e69b7a",
"assets/lib/assets/images/closenew.svg": "75e06efe70687b4d4948581723db8a8c",
"assets/lib/assets/images/report.svg": "776230a6621eb0e472a9009e9b4eef01",
"assets/lib/assets/images/radio_selected.svg": "5c8773ccf6b048f87eb7b76d569e00fb",
"assets/lib/assets/images/notification.svg": "fe7a923492cc9447aa7aaf5ee195831f",
"assets/lib/assets/images/telegram_banner.png": "54c71f00c3b8b4c67ef52242041fcec0",
"assets/lib/assets/images/e_pledge_margin_icon.png": "f4415b990fd504a0e4b108417139c56b",
"assets/lib/assets/images/empty_created_basket.png": "2d23bf697c36ace63eb2eba99d745f18",
"assets/lib/assets/images/eye_open.svg": "9856d2adc2853b59db4bea5822efb36c",
"assets/lib/assets/images/profile2.svg": "60576e314ba40d03bb14618cfcf1b0af",
"assets/lib/assets/images/select_watchlist_to_add_selected.svg": "c0ee116ef412d752cbfc91c9782aed36",
"assets/lib/assets/images/convert.svg": "41945139465cd4352e4f40c2060bb444",
"assets/lib/assets/images/quote_bottom_chart.svg": "e4ca5de45d8b75c634b600c2eac2b96e",
"assets/lib/assets/images/edis.svg": "53c40b3b1ee195aad73fdd6622f89617",
"assets/lib/assets/images/bonds_india_logo.png": "85338e5d355efc19c15694e11183affd",
"assets/lib/assets/images/ltp_up.svg": "7539174078932f563b867c62091a83b3",
"assets/lib/assets/images/empty_notification.svg": "183c307828b635f8b4709f2edf52f23a",
"assets/lib/assets/images/delete_basket_popup.png": "f152558c8789f3df759302510fa29586",
"assets/lib/assets/images/menu_shopping_bag_active.svg": "274deed125718750ad7a054931f45355",
"assets/lib/assets/images/withdrawals.png": "a382b32089e4c050ef712df0e1b3be1f",
"assets/lib/assets/images/ccAvenue_icon.png": "50f7b3b16819f3d54d3d3de87b9a3b36",
"assets/lib/assets/images/expand_close.svg": "5ee5ed093de9cd2be73dd3226359b77a",
"assets/lib/assets/images/more.svg": "4b37e48a879178d7ade4ceacaa3b8ef8",
"assets/lib/assets/images/orders_selected.svg": "b7169c9d03e11a8883b40c5dc7b4fd27",
"assets/lib/assets/images/edis_fail.svg": "863310c026007f27f8f0d4c0a6a4a131",
"assets/lib/assets/images/indices.svg": "defdb719a0974f8984afa4393e90813d",
"assets/lib/assets/images/order_basket.svg": "af72600ec372ceeaa89d15213da4b9cf",
"assets/lib/assets/images/add_selected.svg": "beb39cd36486eedab90a97495bbd8515",
"assets/lib/assets/images/fund_transaction_icon.svg": "8387de50352f7034cddcb074eeedb483",
"assets/lib/assets/images/sip_history_calendar.svg": "397af544144c30226c2988dcb87b5689",
"assets/lib/assets/images/orders_placeholders_dark.svg": "ef8cb731da6a7ac0831e4939a09a9e84",
"assets/lib/assets/images/radio_selected_old.svg": "154e6bf39f040ea0019131c23ec4db09",
"assets/lib/assets/images/scanners.svg": "fb7337a5ae4d40e0ed67a7285fa2e392",
"assets/lib/assets/images/menu_account_circle_active.svg": "86e478f75204b2f03e5a4a77fb6dee49",
"assets/lib/assets/images/goldenpi.png": "db6e9a400e9191b80ab956073c3eb124",
"assets/lib/assets/images/qty_low_high.svg": "c2dfd48589613602d1ee2c3fe198b94a",
"assets/lib/assets/images/empty_basket.png": "114f7005ca40d7d3692fb4734eb88cdd",
"assets/lib/assets/images/web_help.svg": "0b1ab44018cd0fa236533e47eacd7d70",
"assets/lib/assets/images/checklist.svg": "9a6c440965fe7add90b030e5f5291d66",
"assets/lib/assets/images/dashboard_unselected_light.png": "1dc1ab8658599e8c35125584ebb0d842",
"assets/lib/assets/images/stock_report_plus.svg": "827a31b1f19f4370ef391bddde1fbc58",
"assets/lib/assets/images/edit.svg": "8aef66c560559edd1db5ed1c6e776595",
"assets/lib/assets/images/no_deposit_dark.svg": "9ebec32b58c25b0e2dd8adf6909e80a8",
"assets/lib/assets/images/chart_iq.png": "e7b10bee66130f7d037ed83cd5c84569",
"assets/lib/assets/images/popup_close.svg": "4c4d79e8454d93aef50258b5e404dccb",
"assets/lib/assets/images/search_text_remover.svg": "6d3a793f90ae315949715e20112f65ff",
"assets/lib/assets/images/down-arrow-svgrepo-com.svg": "953f69a275ba2138f5fc745b8ee3efb0",
"assets/lib/assets/images/diwali_diya.gif": "e5a0d6156604a5228e1928bda7eb6747",
"assets/lib/assets/images/pdf.svg": "0788031742453f51babf3dd709e4987e",
"assets/lib/assets/images/p_and_l_holding.png": "ca6bbb5ef47f827ae876ce2743399eff",
"assets/lib/assets/images/upwards_3.svg": "1dc479f18e9c414b7a8ad0ebfdbe1413",
"assets/lib/assets/images/bank.svg": "924b68db206b28e7241b52c4e465575c",
"assets/lib/assets/images/market_unselected.svg": "5f6b1dbeb3ae1142194c1fe89367d8ad",
"assets/lib/assets/images/bonds_india_otp.svg": "ca7d4e1224fbb2348c50672ab1af370d",
"assets/lib/assets/images/Duster_pop_up.png": "dbe856781c6e32c80eac08433c39ce1c",
"assets/lib/assets/images/sgb_new_2.png": "309690548f4a4c27704d926368ad5548",
"assets/lib/assets/images/bonds_india_otp.png": "c2436d47aaa446ee1c441171fd8cdb5f",
"assets/lib/assets/images/diamond.svg": "cffd3bcec2abe466c92a928ff2712fe6",
"assets/lib/assets/images/delete.svg": "af0b3472db45eaae1668ef4c9dca759e",
"assets/lib/assets/images/helpline.svg": "f27150e83b13bca0170d3361a8c9a40d",
"assets/lib/assets/images/success.svg": "241fdf14028a475879ae61a75627f452",
"assets/lib/assets/images/loan_amount-tracker.svg": "a5dbf005fbc909429c794b3fa53b575d",
"assets/lib/assets/images/info_1.svg": "127220b9c529576875dc45dc5dc7c04a",
"assets/lib/assets/images/no_holding_bag.svg": "1b37cfa859e4d7a163e9f992ad7af7a2",
"assets/lib/assets/images/no_data_calender.svg": "dfabaae10f43ca234f5680f7b7c2d586",
"assets/lib/assets/images/needhelp.svg": "45a16675a6a0c2114a0b2c738d064c95",
"assets/lib/assets/images/quote_bottom_option.svg": "c0e7f8ebe776ce618994789426eb9e4d",
"assets/lib/assets/images/failure_status_dark.png": "3e8dd83768510a0784aab7dc0f695e5f",
"assets/lib/assets/images/dropdown.svg": "02834bbde0c380056f8d6d86b87702b1",
"assets/lib/assets/images/empty_watchlist_dark.svg": "816a2ead03286a1423665cabd7d5acf5",
"assets/lib/assets/images/sgb_new_3.png": "3d380f9d1ca542d7c04f83426fc4647b",
"assets/lib/assets/images/symbol_not_found.svg": "688e1de24f50ee5ad3c1e9f92230f0ee",
"assets/lib/assets/images/profile.svg": "19f209a0fe0fef54d74de4a54d81b1bc",
"assets/lib/assets/images/help_support_call.svg": "83d32d0625ca1aac4f22d5dd565713d6",
"assets/lib/assets/images/password_dot.svg": "9f567fc0c3135fe5443bd670ca43a44f",
"assets/lib/assets/images/close_mtf_position.png": "cd47996a10ebb941a49ce14f4ecc3136",
"assets/lib/assets/images/delete_watchlist.svg": "cf710adb64e3ea9bad770b6dea2b45f3",
"assets/lib/assets/images/login_icon.svg": "9970f650fcc3b7c7722715d08d88a5b5",
"assets/lib/assets/images/positions_default.png": "6fd97c0bdea5a90d330f679881f27e63",
"assets/lib/assets/images/sgb_new_1.png": "dac87f326f686b1bdcaaa30f55c3fbf2",
"assets/lib/assets/images/sort.svg": "f391027cc30790f55e691302412e2cd7",
"assets/lib/assets/images/alert_create.png": "967a504d9e92fa18cb9f603f2887a6d1",
"assets/lib/assets/images/refer.svg": "700802884133753619f429768c043180",
"assets/lib/assets/images/less_than.svg": "77b9c5dd4144b6075d8167cdaf4fbb11",
"assets/lib/assets/images/filter.svg": "66a9dc06f1a35883f3e51a596380ade3",
"assets/lib/assets/images/quote_bottom_gtt.svg": "010c8a3f345d0d744612364d6649b5d9",
"assets/lib/assets/images/info_3.svg": "aaea6154827f47da7de3accb1bd82672",
"assets/lib/assets/images/theme_rv.svg": "cf01a1a938f920e49fe4b785ac394afc",
"assets/lib/assets/images/calendar.svg": "0f39518d4adb3f539d5be904e757c5f7",
"assets/lib/assets/images/info_2.svg": "545a8930844fabfdadc966ed1636e29c",
"assets/lib/assets/images/delete_sgb.png": "342870868ce076dcd47b6e66f27707c5",
"assets/lib/assets/images/stocksip_placeholder_light.svg": "fa1112f849a3c42c8c27156f87b1095a",
"assets/lib/assets/images/star_notification.png": "f541f39e87fbdc72f3442897c150987e",
"assets/lib/assets/images/download_holding_report.png": "2ee97788e6655d4f01bf74c35f1773e1",
"assets/lib/assets/images/watchlist_unselected.svg": "bbc9771025402079fd9d068ee5bfe5df",
"assets/lib/assets/images/pandl_report_account.svg": "9c683893b5975fbf7323fe5e1a394e21",
"assets/lib/assets/images/question_basket.png": "4fffe29eb7b7e46e7852e8c4c4a061be",
"assets/lib/assets/images/quote_bottom_sip.svg": "55ea08c4a1fbe351df927407b932a7bf",
"assets/lib/assets/images/menu_currency_rupee_circle.svg": "5790a4c89939c62150b23942034ad281",
"assets/lib/assets/images/chart_down_notification.png": "743c9e034c59145605a62a927f569e29",
"assets/lib/assets/images/menu_browse_activity_active.svg": "a416374b62bbbf40a4ee8f0dc6e3860c",
"assets/lib/assets/images/empty_watchlist.svg": "fbc6887e7d9a68a0a118247d65b269bd",
"assets/lib/assets/images/balance.svg": "d716b404351b4d2e15ede82011bc424e",
"assets/lib/assets/images/fail_v2.svg": "7f4617e1b7877761c35fbeaf1184cc39",
"assets/lib/assets/images/good_icon.svg": "ee6e7cbd7df6a68ccd76f79f0ce442d3",
"assets/lib/assets/images/help.svg": "6f8e8831232fce39342a96503108b02d",
"assets/lib/assets/images/sales_arrow.svg": "b951391ef7ee3054ea3caf405c1f9f5f",
"assets/lib/assets/images/add_unselected.svg": "05777fd89aa1d137e620e1ba010caf20",
"assets/lib/assets/images/secure_login.svg": "cf80c84e9c1bf49d6aec83ced7b8cf41",
"assets/lib/assets/images/watchlist-filter.svg": "14ecb82b2896cf36f03a72f4254739f1",
"assets/lib/assets/images/update_income_arrow.svg": "9c4f92101126b423d1b58e5a7e8d18d5",
"assets/lib/assets/images/menu.svg": "a595216c8ff21a4cf0554507897404e6",
"assets/lib/assets/images/deposits.png": "4b134886e5001367426c6d8637f542db",
"assets/lib/assets/images/gtt_empty.png": "adf7297c5e7d9f0f905f19eda86c3847",
"assets/lib/assets/images/success_done.png": "68f35c5abcfe8e67ed635f2047ce3f70",
"assets/lib/assets/images/no_content_bag.png": "6328b1732c9379a89d5c389f8016ba10",
"assets/lib/assets/images/success_with_circle.png": "8f9ddc2d2b3b6dfe486ee76472f93176",
"assets/lib/assets/images/login_v2_background.png": "ce20d8f71057d2186033ab27664cf21f",
"assets/lib/assets/images/bajaj_logo_with_white.png": "10b90e09c56cac2da450e04530fbc671",
"assets/lib/assets/images/block.svg": "0c7461d33f0af35d021a1f8c5f96e8cb",
"assets/lib/assets/images/person_add.svg": "f68b8c253baaf0d965fec63d713e792b",
"assets/lib/assets/images/briefcase_icon.svg": "bc1127f49d8c7a08e42929e0af158598",
"assets/lib/assets/images/percentage_up.svg": "e97adbeccc0d6a498e9f952ba8557253",
"assets/lib/assets/images/face_id_with_circle.svg": "6b316d469891a73ffabb2a2fa9dd85ab",
"assets/lib/assets/images/no_withdrawal_dark.svg": "d5c029e37e0dd682105ead2625a7a29f",
"assets/lib/assets/images/login_banner_1.png": "fe0a5dda26723705eae003b7f094a518",
"assets/lib/assets/images/bank_profile.svg": "3dc4784a15f5c9de6d1241d73941461f",
"assets/lib/assets/images/rate_us_icon.svg": "69a10e78227f025f881ea4ffe33ccdae",
"assets/lib/assets/images/plan_calculator.svg": "5c5f739eb2373df1c5761a32514701ee",
"assets/lib/assets/images/greater_than_equal.svg": "aac073c7c6c76be750fd3550cb762018",
"assets/lib/assets/images/travel_luggage_and_bags.svg": "f0c6995190c9d7c57450ef27b77a0a63",
"assets/lib/assets/images/add_script_watchlist.svg": "6aa266754f9f6beee6872fbfbbcfb385",
"assets/lib/assets/images/search_sgb.svg": "8a71062fc140e844138ca3dc9b9f9543",
"assets/lib/assets/images/pickright.png": "dd5ccfe8ea544b1e33c741d81c7f6d09",
"assets/lib/assets/images/position_unselected.svg": "0090aff50ba57895089843467d2c8170",
"assets/lib/assets/images/finger_print.svg": "57257fe33742e07e78976c09142fe5a4",
"assets/lib/assets/images/no_withdrawal_light.svg": "cccbcb2e186c991e993a360409a417f4",
"assets/lib/assets/localjson/dummy_holding.json": "c21085daf813307b231fa4854638a9f7",
"assets/lib/assets/localjson/dummy_watchlist.json": "97009dce8a25c700136e7ec860972b92",
"assets/lib/assets/localjson/bfsl_texts.json": "e268c6823a966a3e59ce5cc1c27bf81d",
"assets/lib/assets/localhtml/index.html": "ba663d1970576fbd515d6067641f3f01",
"assets/lib/assets/localhtml/ideas.json": "49829c7b15f81d7df9be90b66ec30dae",
"assets/lib/assets/tradingviewchart/index.html": "e07c5ca584411219a11cd66a36ce3694",
"assets/lib/assets/tradingviewchart/index.js": "8e973d5c41488e355ad1c29b7f097331",
"assets/lib/assets/tradingviewchart/index.css": "6f0fcc5fa60a53a91132fc426b87784c",
"assets/lib/assets/tradingviewchart/index1.js": "5d200816d8fcf11e419113cc507dcbc6",
"assets/lib/assets/tradingviewchart/indexworking.html": "f26ab1c54a18453581c7a18c21b8a754",
"assets/lib/assets/remote_config/bfsl_remote_config_service.json": "610583dc8debcedab6d45e2b56f1bb91",
"assets/lib/assets/fonts/rubik/Rubik-Bold.ttf": "11598c28bd4c62d359b58d8a810f385f",
"assets/lib/assets/fonts/rubik/Rubik-SemiBoldItalic.ttf": "5fd410965026f48e8e2cfdd05904315b",
"assets/lib/assets/fonts/rubik/Rubik-Light.ttf": "79aa600424ded269e432988cb556d283",
"assets/lib/assets/fonts/rubik/Rubik-ExtraBoldItalic.ttf": "77c7f123391595707a1d0690dddaa11e",
"assets/lib/assets/fonts/rubik/Rubik-Italic.ttf": "8d8fa3a20c8a94b4f54609870918c2ce",
"assets/lib/assets/fonts/rubik/Rubik-LightItalic.ttf": "e59a5453805c915312e5625f299c4396",
"assets/lib/assets/fonts/rubik/Rubik-SemiBold.ttf": "6fa3da851e142b514ac7f0e125955e4c",
"assets/lib/assets/fonts/rubik/Rubik-ExtraBold.ttf": "5f58705de22e47864820fcf44ba4f076",
"assets/lib/assets/fonts/rubik/Rubik-Regular.ttf": "4b3f06816033d040ef0ed60865adb2d1",
"assets/lib/assets/fonts/rubik/Rubik-BoldItalic.ttf": "8ca6c4d01cb09b0cf99ae0dccdf95a4a",
"assets/lib/assets/lottie_icons/bad_animation.json": "6666b399b94c2c165cca5c34706281ff",
"assets/lib/assets/lottie_icons/good_animation.json": "cbc2febedf01d67cfddee9b010b08f25",
"assets/lib/assets/lottie_icons/thumpsup.json": "9f0f55ecce1bf2f0dc909d872dcccec3",
"assets/lib/assets/lottie_icons/Average_animation.json": "962d07fd1b8dcd9d98418db132ee2ac1",
"assets/AssetManifest.bin": "304bf27ce7a19abbdb9b668523a79c3e",
"assets/fonts/MaterialIcons-Regular.otf": "f138df3a28b88676f9efd5230d3f3900",
"nativeSplash.js": "dd398ece2a3b9f66553d75e83e198859",
"main.dart.js_2.part.js": "37145ee8e96bf00772f05aa5e36ada8f",
"main.dart.js_17.part.js": "1fc9902e5f5e77cf65ea4d30dc804605",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
