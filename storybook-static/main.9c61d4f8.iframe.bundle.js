(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[179],{"./generated-stories-entry.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)},"./src/stories/components/Nav/AppNavbar.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{defaultNavBar:function(){return defaultNavBar}});var _home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/main/components/Nav/AppNavbar.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"components/Nav/AppNavbar",component:main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_1__.Z};var defaultNavBar=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_1__.Z,(0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args))}.bind({});defaultNavBar.parameters=(0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"(args) => {\n    return (\n        <AppNavbar {...args} />\n    )\n}"}},defaultNavBar.parameters)},"./src/stories/components/OurTable.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sample:function(){return Sample}});var _home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),main_components_OurTable__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/main/components/OurTable.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"components/OurTable",component:main_components_OurTable__WEBPACK_IMPORTED_MODULE_1__.Z};var Sample=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(main_components_OurTable__WEBPACK_IMPORTED_MODULE_1__.Z,(0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args))}.bind({});Sample.args={columns:[{Header:"Column 1",accessor:"col1"},{Header:"Column 2",accessor:"col2"}],data:[{col1:"Hello",col2:"World"},{col1:"react-table",col2:"rocks"},{col1:"whatever",col2:"you want"}]},Sample.parameters=(0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"(args) => {\n    return (\n        <OurTable {...args} />\n    )\n}"}},Sample.parameters)},"./src/stories/components/Restaurants/RestaurantForm.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Create:function(){return Create},Edit:function(){return Edit},default:function(){return RestaurantForm_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Form=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-bootstrap/esm/Form.js")),Button=__webpack_require__("./node_modules/react-bootstrap/esm/Button.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),react_router=__webpack_require__("./node_modules/react-router/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function RestaurantForm(_ref){var _errors$name,_errors$description,initialContents=_ref.initialContents,submitAction=_ref.submitAction,_ref$buttonLabel=_ref.buttonLabel,buttonLabel=void 0===_ref$buttonLabel?"Create":_ref$buttonLabel,navigate=(0,react_router.s0)(),_useForm=(0,index_esm.cI)({defaultValues:initialContents||{}}),register=_useForm.register,errors=_useForm.formState.errors,handleSubmit=_useForm.handleSubmit;return(0,jsx_runtime.jsxs)(Form.Z,{onSubmit:handleSubmit(submitAction),children:[initialContents&&(0,jsx_runtime.jsxs)(Form.Z.Group,{className:"mb-3",children:[(0,jsx_runtime.jsx)(Form.Z.Label,{htmlFor:"id",children:"Id"}),(0,jsx_runtime.jsx)(Form.Z.Control,(0,objectSpread2.Z)((0,objectSpread2.Z)({"data-testid":"RestaurantForm-id",id:"id",type:"text"},register("id")),{},{value:initialContents.id,disabled:!0}))]}),(0,jsx_runtime.jsxs)(Form.Z.Group,{className:"mb-3",children:[(0,jsx_runtime.jsx)(Form.Z.Label,{htmlFor:"name",children:"Name"}),(0,jsx_runtime.jsx)(Form.Z.Control,(0,objectSpread2.Z)({"data-testid":"RestaurantForm-name",id:"name",type:"text",isInvalid:Boolean(errors.name)},register("name",{required:"Name is required.",maxLength:{value:30,message:"Max length 30 characters"}}))),(0,jsx_runtime.jsx)(Form.Z.Control.Feedback,{type:"invalid",children:null===(_errors$name=errors.name)||void 0===_errors$name?void 0:_errors$name.message})]}),(0,jsx_runtime.jsxs)(Form.Z.Group,{className:"mb-3",children:[(0,jsx_runtime.jsx)(Form.Z.Label,{htmlFor:"description",children:"Description"}),(0,jsx_runtime.jsx)(Form.Z.Control,(0,objectSpread2.Z)({"data-testid":"RestaurantForm-description",id:"description",type:"text",isInvalid:Boolean(errors.description)},register("description",{required:"Description is required."}))),(0,jsx_runtime.jsx)(Form.Z.Control.Feedback,{type:"invalid",children:null===(_errors$description=errors.description)||void 0===_errors$description?void 0:_errors$description.message})]}),(0,jsx_runtime.jsx)(Button.Z,{type:"submit","data-testid":"RestaurantForm-submit",children:buttonLabel}),(0,jsx_runtime.jsx)(Button.Z,{variant:"Secondary",onClick:function onClick(){return navigate(-1)},"data-testid":"RestaurantForm-cancel",children:"Cancel"})]})}RestaurantForm.__docgenInfo={description:"",methods:[],displayName:"RestaurantForm",props:{buttonLabel:{defaultValue:{value:'"Create"',computed:!1},required:!1}}};var Restaurants_RestaurantForm=RestaurantForm;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Restaurants/RestaurantForm.js"]={name:"RestaurantForm",docgenInfo:RestaurantForm.__docgenInfo,path:"src/main/components/Restaurants/RestaurantForm.js"});var restaurantFixtures=__webpack_require__("./src/fixtures/restaurantFixtures.js"),RestaurantForm_stories={title:"components/Restaurants/RestaurantForm",component:Restaurants_RestaurantForm},Template=function Template(args){return(0,jsx_runtime.jsx)(Restaurants_RestaurantForm,(0,objectSpread2.Z)({},args))},Create=Template.bind({});Create.args={buttonLabel:"Create",submitAction:function submitAction(){console.log("Create was clicked")}};var Edit=Template.bind({});Edit.args={initialContents:restaurantFixtures.F.oneRestaurant,buttonLabel:"Update",submitAction:function submitAction(){console.log("Update was clicked")}},Create.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => {\n    return (\n        <RestaurantForm {...args} />\n    )\n}"}},Create.parameters),Edit.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => {\n    return (\n        <RestaurantForm {...args} />\n    )\n}"}},Edit.parameters)},"./src/stories/components/Restaurants/RestaurantTable.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Empty:function(){return Empty},ThreeSubjectsNoButtons:function(){return ThreeSubjectsNoButtons},ThreeSubjectsWithButtons:function(){return ThreeSubjectsWithButtons},default:function(){return RestaurantTable_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),asyncToGenerator=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js")),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),OurTable=__webpack_require__("./src/main/components/OurTable.js"),react_router=__webpack_require__("./node_modules/react-router/index.js"),get=function get(){var restaurantValue=localStorage.getItem("restaurants");if(void 0===restaurantValue){return set({nextId:1,restaurants:[]})}var restaurantCollection=JSON.parse(restaurantValue);if(null===restaurantCollection){return set({nextId:1,restaurants:[]})}return restaurantCollection},set=function set(restaurantCollection){return localStorage.setItem("restaurants",JSON.stringify(restaurantCollection)),restaurantCollection},restaurantUtils_del=function del(id){if(void 0===id)return{error:"id is a required parameter"};var restaurantCollection=get(),restaurants=restaurantCollection.restaurants,index=restaurants.findIndex((function(r){return r.id==id}));return-1===index?{error:"restaurant with id ".concat(id," not found")}:(restaurants.splice(index,1),set(restaurantCollection),{restaurantCollection:restaurantCollection})},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),showCell=function showCell(cell){return JSON.stringify(cell.row.values)},defaultDeleteCallback=function(){var _ref=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(cell){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:console.log("deleteCallback: ".concat(showCell(cell),")")),restaurantUtils_del(cell.row.values.id);case 2:case"end":return _context.stop()}}),_callee)})));return function defaultDeleteCallback(_x){return _ref.apply(this,arguments)}}();function RestaurantTable(_ref2){var restaurants=_ref2.restaurants,_ref2$deleteCallback=_ref2.deleteCallback,deleteCallback=void 0===_ref2$deleteCallback?defaultDeleteCallback:_ref2$deleteCallback,_ref2$showButtons=_ref2.showButtons,showButtons=void 0===_ref2$showButtons||_ref2$showButtons,_ref2$testIdPrefix=_ref2.testIdPrefix,testIdPrefix=void 0===_ref2$testIdPrefix?"RestaurantTable":_ref2$testIdPrefix,navigate=(0,react_router.s0)(),columns=[{Header:"id",accessor:"id"},{Header:"Name",accessor:"name"},{Header:"Description",accessor:"description"}],buttonColumns=[].concat(columns,[(0,OurTable.W)("Details","primary",(function detailsCallback(cell){console.log("detailsCallback: ".concat(showCell(cell),")")),navigate("/restaurants/details/".concat(cell.row.values.id))}),testIdPrefix),(0,OurTable.W)("Edit","primary",(function editCallback(cell){console.log("editCallback: ".concat(showCell(cell),")")),navigate("/restaurants/edit/".concat(cell.row.values.id))}),testIdPrefix),(0,OurTable.W)("Delete","danger",deleteCallback,testIdPrefix)]),columnsToDisplay=showButtons?buttonColumns:columns;return(0,jsx_runtime.jsx)(OurTable.Z,{data:restaurants,columns:columnsToDisplay,testid:testIdPrefix})}RestaurantTable.__docgenInfo={description:"",methods:[],displayName:"RestaurantTable",props:{deleteCallback:{defaultValue:{value:"async (cell) => {\n    console.log(`deleteCallback: ${showCell(cell)})`);\n    restaurantUtils.del(cell.row.values.id);\n}",computed:!1},required:!1},showButtons:{defaultValue:{value:"true",computed:!1},required:!1},testIdPrefix:{defaultValue:{value:'"RestaurantTable"',computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Restaurants/RestaurantTable.js"]={name:"RestaurantTable",docgenInfo:RestaurantTable.__docgenInfo,path:"src/main/components/Restaurants/RestaurantTable.js"});var restaurantFixtures=__webpack_require__("./src/fixtures/restaurantFixtures.js"),RestaurantTable_stories={title:"components/Restaurants/RestaurantTable",component:RestaurantTable},Template=function Template(args){return(0,jsx_runtime.jsx)(RestaurantTable,(0,objectSpread2.Z)({},args))},Empty=Template.bind({});Empty.args={restaurants:[]};var ThreeSubjectsNoButtons=Template.bind({});ThreeSubjectsNoButtons.args={restaurants:restaurantFixtures.F.threeRestaurants,showButtons:!1};var ThreeSubjectsWithButtons=Template.bind({});ThreeSubjectsWithButtons.args={restaurants:restaurantFixtures.F.threeRestaurants,showButtons:!0},Empty.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => {\n    return (\n        <RestaurantTable {...args} />\n    )\n}"}},Empty.parameters),ThreeSubjectsNoButtons.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => {\n    return (\n        <RestaurantTable {...args} />\n    )\n}"}},ThreeSubjectsNoButtons.parameters),ThreeSubjectsWithButtons.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => {\n    return (\n        <RestaurantTable {...args} />\n    )\n}"}},ThreeSubjectsWithButtons.parameters)},"./src/stories/layouts/BasicLayout/AppNavbar.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default}});var _home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/main/components/Nav/AppNavbar.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"layouts/BasicLayout/AppNavbar",component:main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_1__.Z};var Default=function Template(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_1__.Z,{})}.bind({});Default.parameters=(0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"() => <AppNavbar />"}},Default.parameters)},"./src/stories/layouts/BasicLayout/BasicLayout.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default}});var _home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),main_layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/main/layouts/BasicLayout/BasicLayout.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"layouts/BasicLayout/BasicLayout",component:main_layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_1__.Z};var Default=function Template(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(main_layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_1__.Z,{})}.bind({});Default.parameters=(0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"() => <BasicLayout />"}},Default.parameters)},"./src/stories/layouts/BasicLayout/Footer.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default}});var _home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),main_components_Nav_Footer__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/main/components/Nav/Footer.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"layouts/BasicLayout/Footer",component:main_components_Nav_Footer__WEBPACK_IMPORTED_MODULE_1__.Z};var Default=function Template(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(main_components_Nav_Footer__WEBPACK_IMPORTED_MODULE_1__.Z,{})}.bind({});Default.parameters=(0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"() => {\n    return (\n        <Footer />\n    )\n}"}},Default.parameters)},"./src/stories/pages/HomePage/HomePage.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return HomePage_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),BasicLayout=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/main/layouts/BasicLayout/BasicLayout.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function HomePage(){return(0,jsx_runtime.jsx)(BasicLayout.Z,{children:(0,jsx_runtime.jsxs)("div",{className:"pt-2",children:[(0,jsx_runtime.jsx)("h1",{children:"demo-react-example"}),(0,jsx_runtime.jsx)("p",{children:"This is a sample React webapp that can be deployed on GitHub Pages, since it has no backend."}),(0,jsx_runtime.jsx)("h2",{children:"Utilities"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return localStorage.clear()},children:"Clear Local Storage"})]})})}HomePage.__docgenInfo={description:"",methods:[],displayName:"HomePage"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/pages/HomePage.js"]={name:"HomePage",docgenInfo:HomePage.__docgenInfo,path:"src/main/pages/HomePage.js"});var HomePage_stories={title:"pages/HomePage/HomePage",component:HomePage},Default=function Template(){return(0,jsx_runtime.jsx)(HomePage,{})}.bind({});Default.parameters=(0,objectSpread2.Z)({storySource:{source:"() => <HomePage />"}},Default.parameters)},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{decorators:function(){return decorators},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),es=(__webpack_require__("./node_modules/bootstrap/dist/css/bootstrap.css"),__webpack_require__("./node_modules/react-toastify/dist/ReactToastify.css"),__webpack_require__("./node_modules/react-query/es/index.js")),react_router=__webpack_require__("./node_modules/react-router/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"}},queryClient=new es.QueryClient,decorators=[function(Story){return(0,jsx_runtime.jsx)(es.QueryClientProvider,{client:queryClient,children:(0,jsx_runtime.jsx)(react_router.VA,{children:(0,jsx_runtime.jsx)(Story,{})})})}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/fixtures/restaurantFixtures.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{F:function(){return restaurantFixtures}});var restaurantFixtures={oneRestaurant:[{id:1,name:"The Habit",address:"888 Embarcadero del Norte",city:"Isla Vista",state:"CA",zip:"93117",description:"Burgers and Fries"}],threeRestaurants:[{id:2,name:"Cristino's Bakery",address:"170 Aero Camino",city:"Goleta",state:"CA",zip:"93117",description:"This place is takeout only.  It may look mostly like a bakery with Mexican pastries, but it also has amazing burritos and tacos"},{id:3,name:"Freebirds",address:"879 Embarcadero del Norte",city:"Isla Vista",state:"CA",zip:"93117",description:"Burrito joint, and iconic Isla Vista location"},{id:4,name:"Ca' Dario Cucina Italiana",address:"250 Storke Rd #B",city:"Goleta",state:"CA",zip:"93117",description:"White tablecloth Italian restaurant, with great pasta and pizza"}]}},"./src/main/components/Nav/AppNavbar.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return AppNavbar}});var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-bootstrap/esm/Navbar.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-bootstrap/esm/Container.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-bootstrap/esm/Nav.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-bootstrap/esm/NavDropdown.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router-dom/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function AppNavbar(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Z,{expand:"xl",variant:"dark",bg:"dark",sticky:"top","data-testid":"AppNavbar",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Z.Brand,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,to:"/",children:"Demo React Example"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Z.Toggle,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Z.Collapse,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"me-auto",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Z,{title:"Towns",id:"appnavbar-towns","data-testid":"appnavbar-towns",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Z.Item,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,to:"/towns/ArroyoGrande",children:"Arroyo Grande"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Z.Item,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,to:"/towns/AvilaBeach",children:"Avila Beach"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Z.Item,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,to:"/towns/LosAlamos",children:"Los Alamos"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Z.Link,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,to:"/restaurants",children:"Restaurants"})]})})]})})})}AppNavbar.__docgenInfo={description:"",methods:[],displayName:"AppNavbar"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Nav/AppNavbar.js"]={name:"AppNavbar",docgenInfo:AppNavbar.__docgenInfo,path:"src/main/components/Nav/AppNavbar.js"})},"./src/main/components/Nav/Footer.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Footer}});var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-bootstrap/esm/Container.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Footer(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("footer",{className:"bg-light pt-3 pt-md-4 pb-4 pb-md-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"This is a sample webapp using React with GitHub Pages."})})})}Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Nav/Footer.js"]={name:"Footer",docgenInfo:Footer.__docgenInfo,path:"src/main/components/Nav/Footer.js"})},"./src/main/components/OurTable.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return OurTable},W:function(){return ButtonColumn}});var _home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react_table__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-table/index.js")),react_bootstrap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-bootstrap/esm/Table.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-bootstrap/esm/Button.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function OurTable(_ref){var columns=_ref.columns,data=_ref.data,_ref$testid=_ref.testid,testid=void 0===_ref$testid?"testid":_ref$testid,_useTable=(0,react_table__WEBPACK_IMPORTED_MODULE_1__.useTable)({columns:columns,data:data},react_table__WEBPACK_IMPORTED_MODULE_1__.useSortBy),getTableProps=_useTable.getTableProps,getTableBodyProps=_useTable.getTableBodyProps,headerGroups=_useTable.headerGroups,rows=_useTable.rows,prepareRow=_useTable.prepareRow;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Z,(0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},getTableProps()),{},{striped:!0,bordered:!0,hover:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead",{children:headerGroups.map((function(headerGroup){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tr",(0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},headerGroup.getHeaderGroupProps()),{},{children:headerGroup.headers.map((function(column){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("th",(0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},column.getHeaderProps(column.getSortByToggleProps())),{},{"data-testid":"".concat(testid,"-header-").concat(column.id),children:[column.render("Header"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{"data-testid":"".concat(testid,"-header-").concat(column.id,"-sort-carets"),children:column.isSorted?column.isSortedDesc?" 🔽":" 🔼":""})]}))}))}))}))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody",(0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},getTableBodyProps()),{},{children:rows.map((function(row){return prepareRow(row),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tr",(0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},row.getRowProps()),{},{children:row.cells.map((function(cell,_index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",(0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_team01_s23_4pm_1_docs_team01_s23_4pm_1_docs_source_repo_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},cell.getCellProps()),{},{"data-testid":"".concat(testid,"-cell-row-").concat(cell.row.index,"-col-").concat(cell.column.id),children:cell.render("Cell")}))}))}))}))}))]}))}function ButtonColumn(label,variant,callback,testid){return{Header:label,id:label,Cell:function Cell(_ref2){var cell=_ref2.cell;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Z,{variant:variant,onClick:function onClick(){return callback(cell)},"data-testid":"".concat(testid,"-cell-row-").concat(cell.row.index,"-col-").concat(cell.column.id,"-button"),children:label})}}}OurTable.__docgenInfo={description:"",methods:[],displayName:"OurTable",props:{testid:{defaultValue:{value:'"testid"',computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/OurTable.js"]={name:"OurTable",docgenInfo:OurTable.__docgenInfo,path:"src/main/components/OurTable.js"})},"./src/main/layouts/BasicLayout/BasicLayout.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return BasicLayout}});var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-bootstrap/esm/Container.js"),main_components_Nav_Footer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/main/components/Nav/Footer.js"),main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/main/components/Nav/AppNavbar.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function BasicLayout(_ref){var children=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"d-flex flex-column min-vh-100",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_1__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Z,{expand:"xl",className:"pt-4 flex-grow-1",children:children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(main_components_Nav_Footer__WEBPACK_IMPORTED_MODULE_0__.Z,{})]})}BasicLayout.__docgenInfo={description:"",methods:[],displayName:"BasicLayout"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/layouts/BasicLayout/BasicLayout.js"]={name:"BasicLayout",docgenInfo:BasicLayout.__docgenInfo,path:"src/main/layouts/BasicLayout/BasicLayout.js"})},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/components/Nav/AppNavbar.stories.js":"./src/stories/components/Nav/AppNavbar.stories.js","./stories/components/OurTable.stories.js":"./src/stories/components/OurTable.stories.js","./stories/components/Restaurants/RestaurantForm.stories.js":"./src/stories/components/Restaurants/RestaurantForm.stories.js","./stories/components/Restaurants/RestaurantTable.stories.js":"./src/stories/components/Restaurants/RestaurantTable.stories.js","./stories/layouts/BasicLayout/AppNavbar.stories.js":"./src/stories/layouts/BasicLayout/AppNavbar.stories.js","./stories/layouts/BasicLayout/BasicLayout.stories.js":"./src/stories/layouts/BasicLayout/BasicLayout.stories.js","./stories/layouts/BasicLayout/Footer.stories.js":"./src/stories/layouts/BasicLayout/Footer.stories.js","./stories/pages/HomePage/HomePage.stories.js":"./src/stories/pages/HomePage/HomePage.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[403],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js")}));__webpack_require__.O()}]);