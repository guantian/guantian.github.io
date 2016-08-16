//-------------------------------------------------- api beans -----------------------------------------------//  
/** 
 * @apiDefine LoginParam 
 * @apiParam {String} username email. 
 * @apiParam {String} password 密码. 
 */  
  
/** 
 * @apiDefine UserParam 
 * @apiParam {String} firstname 姓. 
 * @apiParam {String} lastname  名. 
 * @apiParam {Date}   birthday  生日. 
 */  
  
  
  
//-------------------------------------------------- api urls -----------------------------------------------//  
  
  
//----------------------- login ----------------------- //  
/** 
 * @apiDefine LoginGroup 
 * 
 * 登录
 */  
  
//------ login1.0.0版本 ------ //  
 /** 
 * @api {POST} /uap/login 用户登录
 * 
 * @apiGroup LoginGroup 
 * @apiName login 
 * @apiDescription 登录接口
 * @apiVersion 1.0.0 
 * 
 * @apiParam {string} mobile 账号 
 * @apiParam {string} password 密码 
 *
 * 
 * @apiParamExample Body-Send: 
 *     { 
 *        "mobile":"mengfz", 
 *        "password":"123456", 
 *          
 *     } 
 *
 * @apiSuccessExample Success-Response: 
 *
 *     { 
 *       "status": "success",
 *       "data": 
 *          { 
 *              "nickname":"孟凡章", 
 *              "roles":[
 					"salesManagement",
					"CRMManageCommissioner",
					"salesConsultant",
					"SalesOfficeOfBorgward"
					   ]
 *          } 
 *     } 
 * 
 * @apiErrorExample Error-Response: 
 *  
 *     { 
 *       "status": "failure", 
 *       "errors": [{
 *			"errcode" :"401",
 *           "errmsg" : "用户名或者密码错误.",
 *           "field" : "username&password"
 *			}]
 *     } 
 */  


//----------------------- version ----------------------- //  
/** 
 * @apiDefine VersionGroup 
 * 
 * 版本号
 */  
  
//------ version1.0.0版本 ------ //  
 /** 
 * @api {GET} /core/w/dicts/bbappupdateversion 获取版本号
 * 
 * @apiGroup VersionGroup 
 * @apiName version 
 * @apiDescription 获取版本号接口
 * @apiVersion 1.0.0 
 * 
 *
 * @apiSuccessExample Success-Response: 
 *
 *     { 
 *       "status": "success",
 *       "data": 
 *          { 
 *              "androidVersion":"0.64", 
 *				"andriodURL":"https://www.pgyer.com/O8o4", 
 *				"iOSVersion":"0.71", 
 *				"iOSURL":"https://www.pgyer.com/T5Mh"
 *          } 
 *     } 
 * 
 * @apiErrorExample Error-Response: 
 *  
 *     { 
 *       "status": "failure", 
 *       "errors": [{
 *			"errcode" :"401",
 *           "errmsg" : "用户名或者密码错误.",
 *           "field" : "username&password"
 *			}]
 *     } 
 */  
  


//----------------------- maindata ----------------------- //  
/** 
 * @apiDefine MainDataGroup 
 * 
 * 首页数据
 */  
  
//------ version1.0.0版本 ------ //  
 /** 
 * @api {GET} /report/m/homePageInfo/{mobile} 获取主界面数据
 * 
 * @apiGroup MainDataGroup 
 * @apiName mainData 
 * @apiDescription 获取主界面数据接口
 * @apiVersion 1.0.0 
 * 
 * @apiParam {string} mobile 账户 
 *
 *
 * @apiSuccessExample Success-Response: 
 *
 *     { 
 *       "status": "success",
 *       "data": 
 *          { 
 * 				"mobile" : "mengfz", 
 *			    "userJob" : "销售总监", 
 *			    "salesKanban" : "SalesKanban.html", 
 *			    "customerRadar" : "CustomerRadar.html", 
 *			    "fleetYear" : "230",
 *			    "userName" : "null";
 *			    "salesLeadsRadar" : "SalesLeadsRadar.html",
 *			    "salesYear" : "3319",
 *			    "salesMonth" : "1298",
 *			    "fleetToday" : "31",
 *			    "salesToday" : "33",
 *			    "fleetMonth" : "230",
 *			    "leadsConversion": " LeadsConversion.html",
 *			    "salesPromoteRadar" : "SalesPromoteRadar.html",
 *			    "defeatAnalysis" : "DefeatAnalysis.html",
 *			    "lstURL" : [
 *			    "SalesKanbanNew.html",
 *			    "SalesLeadsRadar.html",
 *			    "LeadsConversion.html",
 *			    "CustomerRadar.html",
 *			    "SalesPromoteRadar.html",
 *			    "DefeatAnalysis.html",
 *			    "SalesKanban.html"
 *			];
 *          } 
 *     } 
 * 
 * @apiErrorExample Error-Response: 
 *  
 *     { 
 *       "status": "failure", 
 *       "errors": [{
 *			"errcode" :"401",
 *           "errmsg" : "用户名或者密码错误.",
 *           "field" : "username&password"
 *			}]
 *     } 
 */  