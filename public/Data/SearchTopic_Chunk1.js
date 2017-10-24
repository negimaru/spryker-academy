define({"71":{i:0.00250121949368462,u:"../developing_with_spryker/module_guide/checkout_process/payment.html",a:"\nMultiple payments\n Spryker enables to have multiple payments per checkout, payments are stored in QuoteTransfer::payments and persisted when CheckoutClient::placeOrder is called in last checkout step. \nEach payment method must provide payment amount it shares from order grand total. This amount is ...",t:"Payment"},"72":{i:0.000885173072015092,u:"../developing_with_spryker/module_guide/checkout_process/dummy_payment.html",a:"Do not use this code for production but you can use it as a starting point for new payment integrations. What is the DummyPayment for: it brings a simple state machine it shows how to integrate payment into the system it shows how to handle refunds it allows to test checkout process in several ways ...",t:"Dummy Payment"},"73":{i:0.00416116174525432,u:"../developing_with_spryker/module_guide/content_management/cms/cms.html",a:"Content Management System The content management system (CMS) is a lightweight tool used for publishing, editing and modifying the content displayed in Yves. In Spryker, the CMS manages content such as pages and blocks and keeps track of URL redirects. You can immediately start using the content ...",t:"CMS"},"74":{i:0.00369217802101763,u:"../developing_with_spryker/module_guide/content_management/cms/cms_glossary.html",a:"CMS Glossary    See also: CMS - Creating a New Page CMS - Preview Draft Page CMS Block CMS Versioning CMS  CMS - URL Redirects   Last review date: Sep. 20th, 2017\n",t:"CMS Glossary "},"75":{i:0.0042152451675657,u:"../developing_with_spryker/module_guide/content_management/cms/cms_preview_draft_page.html",a:"Previewing draft version allows to check the saved draft version in Yves before publishing it. Prerequisites Upgrade spryker/cms module to at least 6.2 version. Additional information on how to migrate the spryker/cms module can be found  here . If you have spryker/cms-collector module installed, ...",t:"CMS - Preview Draft Page"},"76":{i:0.00112296761439838,u:"../developing_with_spryker/module_guide/content_management/cms/cms_widget.html",a:"\n\t\t\tCMS content widgets is a new CMS feature for adding  dynamic content to CMS pages/blocks.\n\t\t For example, you can list a single product, product lists, product groups or product sets.\n\t\t Integration First of all you need to install the cms-content-widget module with Composer (update ...",t:"CMS - Content Widget"},"77":{i:0.000885173072015092,u:"../developing_with_spryker/module_guide/content_management/glossary/glossary.html",a:"The Glossary module has the responsibility to manage glossary keys that hold the localized content in the database. For each entry in the glossary keys table there is a corresponding entry in the Touch table that has a timestamp that marks the last update that was made on that glossary keys that ...",t:"Glossary"},"78":{i:0.0011143857293506,u:"../developing_with_spryker/module_guide/content_management/glossary/glossary_keys.html",a:"Glossary keys present two layers of persistence: SQL database storage in-memory key-value storage (Redis) In this section we’ll exemplify the usage of the functionality for managing the glossary keys from the backoffice user interface and the usage of them for the Yves interface through twig ...",t:"Managing Glossary Keys"},"79":{i:0.0011143857293506,u:"../developing_with_spryker/module_guide/content_management/glossary/glossary_keys_use.html",a:"One of the usages of the glossary keys in the front office application (Yves) is for rendering translated content. For allowing to render translated content, a dedicated extension for the twig template engine is available to be used. You can see bellow how you can add translated content in Yves  ...",t:"Using Glossary Keys"},"80":{i:0.0011143857293506,u:"../developing_with_spryker/module_guide/content_management/glossary/glossary_translations.html",a:"The key concept for rendering web pages with translated content very fast and with limited resource usage is using a key-value storage. Yves has no connection to Zed’s SQL database and it fetches all dynamic data from a key-value storage(Redis) and a search engine(Elasticsearch). This data contains ...",t:"How Translations are Managed - Glossary"},"81":{i:0.000863585452966575,u:"../developing_with_spryker/module_guide/customer_management/customer/about_customer.html",a:"The following modules are used to establish customer centric functionality. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous ...",t:"About Customer"},"82":{i:0.0012742463141628,u:"../developing_with_spryker/module_guide/customer_management/wishlist/wishlist.html",a:"The Wishlist module is very straight forward and easy to use. A Customer has a default wishlist, which will be created first time when there is a request made to manage its items. There is only one wishlist per customer by default, however one customer can have multiple named wishlists, if required. ...",t:"Wishlist"},"83":{i:0.000863585452966575,u:"../developing_with_spryker/module_guide/customer_management/wishlist/wishlist_items_mgmt.html",a:"addItem(WishlistItemTransfer $wishlistItemTransfer) Adds item to wishlist. Required values: fkCustomer, fkProduct. Optional: wishlistName. In case wishlist name is not provided the default value will be used. \u003c?php\n$wishlistItemTransfer = (new WishlistItemTransfer())\n    -\u003esetWishlistName(\u0027foobar\u0027)\n ...",t:"Wishlist Items Management"},"84":{i:0.000863585452966575,u:"../developing_with_spryker/module_guide/customer_management/wishlist/wishlist_management.html",a:"createWishlist(WishlistTransfer $wishlistTransfer) Creates wishlist for a specific customer with given name. Required values: name, fkCustomer. \u003c?php\n$wishlistTransfer = (new WishlistTransfer())\n    -\u003esetName(\u0027foobar\u0027)\n    -\u003esetFkCustomer(1);\n\n$wishlistTransfer = ...",t:"Wishlist Management"},"85":{i:0.000863585452966575,u:"../developing_with_spryker/module_guide/customer_management/wishlist/wishlist_schema.html",a:"Wishlist Schema As is the concept of the wishlist, the schema is also very straightforward. A customer can have multiple wishlists, which can have multiple items.",t:"Wishlist Schema"},"86":{i:0.000885173072015092,u:"../developing_with_spryker/module_guide/customer_management/customer/customer.html",a:"The customer entity wraps data around registered customers. Customer data is managed from the backend application (Zed) and frontend application (Yves). Customer Address One customer can have many customer addresses stored in the database. There are two types of customer addresses: Billing Address: ...",t:"Customer"},"87":{i:0.00382809891959055,u:"../developing_with_spryker/module_guide/discount/discount.html",a:"Discount The Discount module is responsible for managing discounts in the Spryker OS. Overview In the diagram below you can see how the discount details are stored in the database: The spy_discount_voucher_pool table purpose is to group the vouchers codes generated for each discount. You can ...",t:"Discount"},"88":{i:0.0015419869764066,u:"../developing_with_spryker/module_guide/discount/discount_applying.html",a:"There are two ways of applying a discount to an order : for cart rule discounts : these discounts are contained in the cart and are calculated automatically for voucher code discounts : these discounts must be added by the customer and they are calculated once they are entered Cart Rule Discounts ...",t:"Applying a Discount"},"89":{i:0.00159799968057151,u:"../developing_with_spryker/module_guide/discount/discount_calculator_plugin.html",a:"Once the discountable items are collected, there are 2 ways to calculate the discounted value. Depending on the calculator_plugin linked to the discount, we identify: PLUGIN_CALCULATOR_FIXED - fixed amount discount ( e.g. 10€ off) the currency in which the discount is calculated is the currency ...",t:"Discount Calculator Plugin"},"90":{i:0.00127032491102596,u:"../developing_with_spryker/module_guide/discount/discount_excl_nonexcl.html",a:"Exclusive and Non-Exclusive Discounts Discounts that have the Is_Exclusive flag set with value true cannot be combined. If the cart includes more than one exclusive discount, only the discount that offers the highest discounted value will be applied. If the cart includes a mix of exclusive and ...",t:"Exclusive and Non-exclusive Discounts"},"91":{i:0.00127032491102596,u:"../developing_with_spryker/module_guide/discount/discount_ext_module.html",a:"The main components that describe a discount are: discount collector: Specifies for which items discount is being applied/calculated. Example: The discount can be applied for a specific set of products or for orders that contain a minimum number of items or for orders that have a minimum grand total ...",t:"Extending the Discount Module"},"92":{i:0.00136759322156288,u:"../developing_with_spryker/module_guide/discount/discount_promotion.html",a:"\n           For marketing reasons shops sometimes give away free products depending on the cart content. This could be for example when the cart value is high to give away some free perks.\n           Or for example when the customer buys certain product to give away some other product that is ...",t:"Discount Promotion"},"93":{i:0.00325160997298136,u:"../developing_with_spryker/module_guide/discount/discount_2_0.html",a:"The latest version of this module can be found here  Discount The Discount Module is responsible of managing discounts in the Spryker OS. The schema below illustrates how discounts are modeled in Zed’s database. Discount Types There are two types of discounts: fixed amount discount ( e.g. 10€ off) ...",t:"Discount - Version 2.0"},"94":{i:0.000863585452966575,u:"../developing_with_spryker/module_guide/engines/about_engines.html",a:"The following modules are Engines. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes you the page preceding the one ...",t:"About Engines"},"95":{i:0.00123005159775141,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine.html",a:"The StateMachine module provides generic implementation for state machines (SM). This module provides functionality for drawing the SM graph, triggering events, initializing a new state machine or for getting the state history for a processed item.   If you are looking for information on the OMS ...",t:"State Machine"},"96":{i:0.00187396141057217,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_cronjob.html",a:"There are three console commands dedicated for the state machine: state-machine:check-condition--state-machine-name (string) name of state machine - checks all the states that have a condition without event and triggers them. state-machine:check-timeout--state-machine-name (string) name of state ...",t:"Cron Jobs - State Machine"},"97":{i:0.0010129496858256,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_events.html",a:"There are two main triggers: first one StateMachineFacade::triggerForNewStateMachineItem() is used when first time triggering the state machine for an item; this trigger will initialize the state machine and start transition through states until a decision without event, timeout or manual event is ...",t:"Triggering Events - State Machine"},"98":{i:0.0010129496858256,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_implementing_plugin.html",a:"To start using state machine, you need create a new plugin by implementing the  StateMachineHandlerInterface. This plugin is used when there is need for additional information from client or some action happens and the client needs to be notified about it. List of interface methods that need to be ...",t:"Implementing the Plugin - State Machine"},"99":{i:0.0010129496858256,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_modelling.html",a:"States How are the states modelled in XML? A list of state elements can be easily defined in an XML file, as in the example below. A state is defined by a name. The display attribute allows to link a glossary key that contains the name of the state for the locales configured in the application, as ...",t:"Modelling - State Machine"},"100":{i:0.0010129496858256,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_persistence.html",a:"To persist the state of the item and make the connection with the state machine, you need to store related data into the database. For example, you can create two fields (idStateMachineState(int) and idStateMachineProcess(int)) and store their id’s when itemStateUpdated is being triggered.",t:"Persistence - State Machine"},"101":{i:0.0010129496858256,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_zed_presentation.html",a:"To add manual trigger button or history for items, you need to add some implementation. State machine provides methods for triggering events and for retrieving history. StateMachineFacade::processedStateMachine(StateMachineItemTransfer[]) updates the given array of items with data from state machine ...",t:"Updating Presentation in Zed - State Machine"},"102":{i:0.00100751494499209,u:"../developing_with_spryker/module_guide/engines/step_engine/step_engine.html",a:"The StepEngine module provides an easy way to define multi-step pages with forms. Using this module you can define Steps and additionally you can link forms to interact with the user. This is useful in handling the checkout process where you can define multiple steps, such as: select payment method; ...",t:"Step Engine"},"103":{i:0.0010348638666719,u:"../developing_with_spryker/module_guide/engines/step_engine/step_engine_breadcrumb.html",a:"To set up breadcrumb navigation for a step collection, first you’ll need to mark which steps you would like to have in your breadcrumb. To mark a step available for breadcrumb just implement \\Spryker\\Yves\\StepEngine\\Dependency\\Step\\StepWithBreadcrumbInterface in all the necessary steps. The ...",t:"Breadcrumb Navigation - Step Engine"},"104":{i:0.0010348638666719,u:"../developing_with_spryker/module_guide/engines/step_engine/step_engine_define_step.html",a:"When adding a new step, you must implement the StepInterface. The StepInterface defines all the methods that StepEngine needs when executing a step: preCondition() - here you define the requirements for the step to get executed requireInput() - here you define if the step requires user input (e.g. ...",t:"Defining a Step - Step Engine"},"105":{i:0.0010348638666719,u:"../developing_with_spryker/module_guide/engines/step_engine/step_engine_use_case_scenario.html",a:"Below you can see an example of configuration for the checkout process, containing two steps: an entry step and a success step. Click to expand the code sample \u003c?php\nnamespace Pyz\\Yves\\Checkout;\n\nuse Pyz\\Yves\\Checkout\\Form\\FormFactory;\nuse ...",t:"Use Case Scenario - Step Engine"},"106":{i:0.0010348638666719,u:"../developing_with_spryker/module_guide/engines/step_engine/step_engine_workflow.html",a:"When you need to define a multi-step process using the StepEngine feature, you need to implement the following interfaces: StepInterface - here you implement the logic that needs to get executed when the defined step takes place SubFormInterface - defines the name of the form and the pathProperty ...",t:"Step Engine Workflow"},"107":{i:0.000863585452966575,u:"../developing_with_spryker/module_guide/infrastructure/about_infrastructure.html",a:"The following modules are used to establish the supporting infrastructure.   Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous ...",t:"About Infrastructure"},"108":{i:0.00733703954629163,u:"../developing_with_spryker/module_guide/infrastructure/collector/collector.html",a:"The Collector module provides functionality to aggregate data from an SQL database, and synchronize with a NoSQL data store, in a format that can be easily consumed by front-end application.\n\n See  Performance and Scalability  for an overview of the separation of responsibilities between Yves and ...",t:"Collector"},"109":{i:0.00405729211714439,u:"../developing_with_spryker/module_guide/infrastructure/collector/collector_development.html",a:"The Collector module provides mechanisms to manage data consumed by front-end application.\n\nTo populate the data stores, 4 steps are required:\n\n Touch\n \nConfigure\n Collect\n Touch\n In order for anything to be synchronized, first it has to be marked (touched) via the  Touch mechanism . Each collector ...",t:"Development - Collector"},"110":{i:0.00405729211714439,u:"../developing_with_spryker/module_guide/infrastructure/collector/collector_running.html",a:"Each Collector is executed once for each Locale that’s configured in the Store. To see the currently configured locales, check the stores.php configuration file.\n\nThere are three commands which handle collectors related tasks.\n\n console collector:search:export\nconsole collector:search:update\nconsole ...",t:"Running Collectors"},"111":{i:0.00405729211714439,u:"../developing_with_spryker/module_guide/infrastructure/collector/collector_sched_collector_jobs.html",a:"The cronjob file jobs.php stores the configuration related to collectors.\n\n \u003c?php\n$jobs[] = [\n    \u0027name\u0027 =\u003e \u0027export-search\u0027,\n    \u0027command\u0027 =\u003e \u0027$PHP_BIN vendor/bin/console collector:search:export\u0027,\n    \u0027schedule\u0027 =\u003e \u0027*/10 * * * *\u0027,\n    \u0027enable\u0027 =\u003e false,\n    \u0027stores\u0027 =\u003e $allStores,\n];\n?\u003e In the ...",t:"Scheduling Collector Jobs"},"112":{i:0.00405729211714439,u:"../developing_with_spryker/module_guide/infrastructure/collector/collector_types.html",a:"Data Collection\n\nData aggregation is a complex process of transforming scattered data between different resources, into a new one, usually smaller then the input. There are two basic Collector Types, depending on the way the data is being collected.\n\n AbstractPdoCollector - uses PHP Data Objects ...",t:"Collector Types"},"113":{i:0.00827585184523659,u:"../developing_with_spryker/module_guide/infrastructure/event/event.html",a:"The Event module implements an Observer pattern where you can add hooks (events) to your code and allow other bundles to listen and react to those events.\n\n There are two methods:\n\n Traditional Synchronous where listeners are handled at the same time as they are dispatched\n Asynchronous (Queueable) ...",t:"Event"},"114":{i:0.00698035233499846,u:"../developing_with_spryker/module_guide/infrastructure/event/event_adding.html",a:"When adding an event, make sure you first decide what kind of events you want to trigger in your code. Events are stored in a class for later use, by adding its literal string value (BundleName.subject.action). This value uniquely identifies an event in the event module, and all listeners attached ...",t:"Adding Events"},"115":{i:0.00698035233499846,u:"../developing_with_spryker/module_guide/infrastructure/event/event_asynch.html",a:"Asynchronous Events An asynchronous event can be created by using the addListenerQueued method instead of addListener. The difference is that it queues the event to be processed later by another process/consumer. You must have queue configured before using this feature, see bellow.",t:"Asynchronous Events"},"116":{i:0.00698035233499846,u:"../developing_with_spryker/module_guide/infrastructure/event/event_configure_q.html",a:"Implementation is already present in demoshop and all code samples can be found there. To implement an events queue: Click to expand the code sample \u003c?php\nnamespace Pyz\\Client\\RabbitMq;\n\nuse ArrayObject;\nuse Generated\\Shared\\Transfer\\RabbitMqOptionTransfer;\nuse ...",t:"Configuring an Events Queue"},"117":{i:0.00698035233499846,u:"../developing_with_spryker/module_guide/infrastructure/event/event_listen.html",a:"There are two ways to listen to events, using direct listeners or subscribers. The difference between these two is that a subscriber allows the module providing the subscriber to wire up the handlers in the module that owns it without touching the EventDependencyProvider exception’s initial ...",t:"Listening to Events"},"118":{i:0.00698035233499846,u:"../developing_with_spryker/module_guide/infrastructure/event/event_priority.html",a:"The Event Collector \\Spryker\\Service\\Event\\Dependency\\EventCollectionInterface uses a priority queue store events so each that event can have different priority and will be executed in correct order when triggered. For example: \u003c?php\n$eventCollection\n    ...",t:"Listener Priority"},"119":{i:0.00575692764105747,u:"../developing_with_spryker/module_guide/infrastructure/file_system/filesystem.html",a:" The FileSystem Service provides an abstraction for file systems. It uses the same interface to access different types of file systems, regardless of their location or protocol. The Flysystem module provides plugins which  thephpleague/flysystem  vendor package and implement FileSystem\u0027s plugin ...",t:"File System "},"120":{i:0.00575692764105747,u:"../developing_with_spryker/module_guide/infrastructure/file_system/filesystem_api.html",a:"Read API  getMetadata(FileSystemQueryTransfer $fileSystemQueryTransfer) Return FileSystemResourceMetadataTransfer, null on failure \u003c?php\n$fileSystemQueryTransfer = new ...",t:"File System API"},"121":{i:0.000885173072015092,u:"../developing_with_spryker/module_guide/infrastructure/console.html",a:"A console command is a php class that contains the implementation of a functionality that can get executed from the command line. Spryker contains a wrapper over Symfony’s Console component, that makes the implementation and configuration of a console command easier. More information about console ...",t:"Console"},"122":{i:0.000885173072015092,u:"../developing_with_spryker/module_guide/infrastructure/errorhandler.html",a:"The Spryker OS uses a dedicated error handling mechanism to collect detailed error related information. The ErrorHandler handles notices, warnings and other types of minor issues usually not thrown as exceptions as strict as more serious errors. By default, they all throw meaningful exceptions for ...",t:"ErrorHandler"},"123":{i:0.000863585452966575,u:"../developing_with_spryker/module_guide/infrastructure/installer.html",a:"The Installer module is responsible of managing the installment process of required database data. Plugin Stack You define the installer plugins of the bundles you want to include in the Pyz ImporterDependencyProvider: \u003c?php\nnamespace Pyz\\Zed\\Installer;\n\nuse ...",t:"Installer"},"124":{i:0.00385515878188937,u:"../developing_with_spryker/module_guide/infrastructure/touch.html",a:"Yves has no connection to the database of Zed. This is a key concept to make rendering front-end pages fast. Yves fetches all dynamic data from a key-value storage (Redis) and a search engine (Elasticsearch).\n\n This data includes, but is not limited to:\n\n URL mappings\n Product Information\n Product ...",t:"Touch"},"125":{i:0.000885173072015092,u:"../developing_with_spryker/module_guide/infrastructure/zed_request.html",a:"This module is used to handle requests from Yves to Zed and the responses from Zed. Internally it makes use of the well known  Guzzle  library. HandlerStackContainer Guzzle provides a way to add a so called middleware. It makes use of a handler stack where you can push a middleware to. For more ...",t:"Zed Request"},"126":{i:0.000863585452966575,u:"../developing_with_spryker/module_guide/inventory/about_inventory.html",a:"The following modules are used to establish inventory functionality. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button ...",t:"About Inventory"},"127":{i:0.000885173072015092,u:"../developing_with_spryker/module_guide/inventory/availability.html",a:"For most of the e-commerce platforms stock updates is nothing reflective. Stock updates most of the time will come from partner merchants and the frequency of those can be very different from case to case. If stock is what defines for an e-commerce platform whether the product is available for sale ...",t:"Availability"},"128":{i:0.000885173072015092,u:"../developing_with_spryker/module_guide/inventory/stock.html",a:"Multiple storage locations Spryker allows to define several storage locations in which the products are being stored. For a product we can have associated multiple stock product entries associated, each of them associated to a storage location. Product stock A product is associated to at least one ...",t:"Stock"},"129":{i:0.000885173072015092,u:"../developing_with_spryker/module_guide/mail/mail.html",a:"Sending mail is a standard web application task. There are many cases where an action triggers an email to be sent. These actions can be newsletter subscriptions, order placement, refunds, customer account registration, etc. The Mail module helps you to create emails to be sent. To send an email you ...",t:"Mail"},"130":{i:0.00101406561879699,u:"../developing_with_spryker/module_guide/mail/mail_create_provider_plugin.html",a:"The provider class is used to define the Mail Provider you want to use. As each provider behaves differently the provider class will also look different accordingly. Create a class which implements MailProviderPluginInterface. After that  register  your provider in the Mail module.",t:"Create a MailProviderPlugin"},"131":{i:0.00101406561879699,u:"../developing_with_spryker/module_guide/mail/mail_create_type_plugin.html",a:"MailType is a class used to build the entire MailTransfer through an easy to use interface. Create the MailTypePlugin within the module which should send out a email and implement MailTypePluginInterface. Then just setup your email in the build() method. Within the build() method you have access to ...",t:"Create a MailTypePlugin"},"132":{i:0.00101406561879699,u:"../developing_with_spryker/module_guide/mail/mail_how_to_send.html",a:"Once you have completed all the steps above, you must call the MailFacade::handleMail() to activate the mail functionality. The following example represents a real-world scenario: CustomerRegistration. A Customer goes through the registration process in your frontend (Yves) and all customer ...",t:"How to send a Mail"},"133":{i:0.0125060545310944,u:"../developing_with_spryker/module_guide/mail/mail_register_provider.html",a:"To add your provider to the MailProviderCollection add it to MailDependencyProvider: \u003c?php\nnamespace Pyz\\Zed\\Mail;\n\n...\n\npublic function provideBusinessLayerDependencies(Container $container) \n{\n    ...\n    \n    $container-\u003eextend(self::MAIL_PROVIDER_COLLECTION, function ...",t:"Register the Mail Provider"},"134":{i:0.00101406561879699,u:"../developing_with_spryker/module_guide/mail/mail_register_type.html",a:"To add your MailType to the MailTypeCollection you need to add it in your MailDependencyProvider: \u003c?php\nnamespace Pyz\\Zed\\Mail;\n\n...\n\npublic function provideBusinessLayerDependencies(Container $container) \n{\n    ...\n    \n    $container-\u003eextend(self::MAIL_TYPE_COLLECTION, function ...",t:"Register a MailTypePlugin"},"135":{i:0.000863585452966575,u:"../developing_with_spryker/module_guide/products/about_products.html",a:"The following modules are used to establish product functionality. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes ...",t:"About Products"},"136":{i:0.00125219869094608,u:"../developing_with_spryker/module_guide/products/product/product.html",a:"Product data is central data for shops. It contains characteristics that describe the product as well as characteristics that control behavior of the shop. For example the color of a product is an important information that the customer might need, whereas the weight of the product can be used to ...",t:"Product"},"137":{i:0.00104098121084585,u:"../developing_with_spryker/module_guide/products/product/product_define_variants.html",a:"Spryker’s data structure for products allows to design a product hierarchy. The abstract product does not have stock, but can have a price. The concrete product has stock and price. This mechanism allows to create variants of a product. Consider the example of a T-Shirt that is available in the ...",t:"Defining Variants with Abstract and Concrete Products"},"138":{i:0.00104098121084585,u:"../developing_with_spryker/module_guide/products/product/product_bundles.html",a:"A bundle represents two or more products, sold as a set; it is a distinct product that incorporates other concrete products. Example: Bundles are handled in different ways: For example, a marketing bundle of two items that gives a 20% discount is purchased as a single item and then split for ...",t:"Product Bundles"},});