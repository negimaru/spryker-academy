define({"138":{i:0.00126977626163199,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_building_your_own.html",a:"To create a new relation type, modify the Yves and Zed applications:\n\n Zed:\n\n Create new relation type in \\Spryker\\Shared\\ProductRelation\\ProductRelationTypes as a new constant type for example TYPE_RELATION_NEW also include to getAvailableRelationTypes returned array. After this you can able select ...",t:"Building Your Own Product Relation Type"},"139":{i:0.00126977626163199,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_db_entity_relation.html",a:"spy_product_relation.fk_product_abstract - is the product for which relation is build.  spy_product_relation.is_active - if relation is not active it will still be exported, but not visible.  spy_product_relation_product_abstract.fk_product_abstract - is the related product.  ...",t:"Database Entity Relation Schema - Product"},"140":{i:0.00126977626163199,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_integration.html",a:"Register a new collector plugin. How to is in  Yves Datastore Collector - Product Relation .\n Then register a new twig service plugin  \\Spryker\\Yves\\ProductRelation\\Plugin\\TwigProductRelationServiceProvider inside the \\Pyz\\Yves\\Application\\YvesBootstrap::registerServiceProviders plugin stack.  This ...",t:"Product Relation Integration"},"141":{i:0.00126977626163199,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_query_builder.html",a:"Query build in Zed allows to select and bulid a dynamic related product query. The query ships with pre-set rules:\n\n sku - filter by abstract product sku.\n name - filter by abstract product name. The locale is Zed’s default locale. If a product matches in that locale it will be related in both ...",t:"Query Builder - Product Relation"},"142":{i:0.00126977626163199,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_types.html",a:"In Spryker currently there are two types of relations:\n\n Related-products, related products displayed in the product detail page for the currently selected abstract product.\n Up-selling, related products displayed in the cart overview page, related products are from a list of abstract product ids or ...",t:"Product Relation Types"},"143":{i:0.00234909399987195,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_yves_datatastore.html",a:"The product relation collector, exports relations to the Yves data store. This collector is locate in the ProductRelationCollector module.\n\nInclude this module in your composer.json file and update, then and add plugin ProductRelationCollectorPlugin from this module to ...",t:"Yves Datastore Collector - Product Relation"},"144":{i:0.00183739315731539,u:"../developing_with_spryker/module_guide/products/product_set.html",a:"Overview The Product Sets feature allows you to put together multiple products for the purpose of emphasizing that the set of products can be bought together. Product Sets usually have their own separate list and detail pages in the shop frontend where customers can add containing products to the ...",t:"Product Set"},"145":{i:0.00108214638658239,u:"../developing_with_spryker/module_guide/products/category.html",a:"Product Category The mechanisms that make finding a product easier are the most important features in a commerce business. If it\u0027s difficult for a customer to find the product that he needs, then he won\u0027t buy it even if that product is available in the shop. One of the features is organizing the ...",t:"Category"},"146":{i:0.00108214638658239,u:"../developing_with_spryker/module_guide/products/price.html",a:"A price can be attached to an abstract product but also to a concrete product. The price is stored as an integer, in the smallest unit of the currency (e.g. for Euro that would be cents). Each price is assigned to a price type ( e.g. gross price, net price ) and for a price type there can be one to ...",t:"Price"},"147":{i:0.00657056655562739,u:"../developing_with_spryker/module_guide/queue/queue.html",a:"BETA version\n This module is still in development and for the moment is only available as beta version. Concepts Sender\t -  a program that sends messages.\n Receiver\t- a program that waits to receive messages.\n Message - \ta string or binary data  passed from Sender to Receiver.\n Message Box\t- Similar ...",t:"Queue"},"148":{i:0.00654491458928272,u:"../developing_with_spryker/module_guide/queue/queue_adapter.html",a:"Default Queue Adapter Spryker includes a RabbitMQ adapter package in  spryker/rabbit-mq , if you have already installed the spryker demoshop on your machine, this package will be automatically downloaded for you.\n",t:"Default Queue Adapter"},"149":{i:0.00654491458928272,u:"../developing_with_spryker/module_guide/queue/queue_benefits.html",a:"The following is a list of the Queus System’s benefits:\n \nAsynchronous: Message processing can be offloaded to different times to prevent bottlenecks and run when necessary.\n Decoupling: The queue provides separate layers for data and processing\n Scalability: Adding more processes for receiving and ...",t:"Queue Benefits"},"150":{i:0.00654491458928272,u:"../developing_with_spryker/module_guide/queue/queue_engine.html",a:"The Spryker virtual machine is shipped with a ready to use RabbitMQ engine inside.\n\n To access the management UI:\n\n Go to http://zed.de.demoshop.local:15672/ (Replace demoshop with your project name if you customized it)\n Enter the default credentials: user: admin Password: mate20mg\n Click Login\n ...",t:"Default Queue Engine"},"151":{i:0.00654491458928272,u:"../developing_with_spryker/module_guide/queue/queue_job_config.html",a:"You can also find the Worker configuration in jobs.php as part of the Demopshop and adjust the worker command to run every minute.\n\n To adjust the worker command to run every minute:\n \u003c?php\n\n$jobs[] = [\n    \u0027name\u0027 =\u003e \u0027queue-worker-start\u0027,\n    \u0027command\u0027 =\u003e \u0027$PHP_BIN vendor/bin/console ...",t:"Queue Job Configuration"},"152":{i:0.00654491458928272,u:"../developing_with_spryker/module_guide/queue/queue_msg_processor.html",a:"Plugins are used to enable developers to have more focus on message processing. This is achieved by handling the queue implementation as a background process, allowing developers to focus on messages and their processing logic.\n\n Example:\n\n \u003c?php\nnamespace ...",t:"Queue Message Processor Plugin"},"153":{i:0.00654491458928272,u:"../developing_with_spryker/module_guide/queue/queue_task.html",a:"The Queue module provides a specific command for listening to the queues, fetching messages and triggering registered processors, by running this command you will see what messages are going to be consumed and passed to the plugins.\n\n The command syntax is as follows:\n\n ./vendor/bin/console ...",t:"Queue Task"},"154":{i:0.00654491458928272,u:"../developing_with_spryker/module_guide/queue/queue_workers.html",a:"Queue Worker is another useful command that sends the Task to a background process and provides parallel processing. By adjusting the Worker config we can run tasks with different time slot and a different amount of processes.\n Command syntax:\n\n ./vendor/bin/console queue:worker:start -vvv\n",t:"Queue Workers"},"155":{i:0.00580189186166382,u:"../developing_with_spryker/module_guide/tax/tax.html",a:"The Tax module is responsible for handling tax rates that can apply for products, product options or shipment. Overview The tax sets can have different tax rates for each country defined in your shop. You can see in the diagram below how these entities are modeled in the database. A tax set is ...",t:"Tax"},"156":{i:0.0046964079212981,u:"../developing_with_spryker/module_guide/tax/tax_2_0.html",a:"The latest version of this module can be found here  Tax Spryker allows to define different tax sets that include one to many different tax rates. Tax set - tax rate association A tax set has associated at least one tax rate. For products on which there aren’t applied any taxes : associate the ...",t:"Tax Version 2.0"},"157":{i:0.00310011991121382,u:"../developing_with_spryker/module_guide/url/url.html",a:" The URL module handles dynamic URLs for entities that appear on the front-end (Yves). At the moment, Spryker core provides URL handling for products, CMS pages, categories and URL redirects. The URLs are stored in one database table and each is unique. The database structure for storing URLs looks ...",t:"URL "},"158":{i:0.00237406039273504,u:"../developing_with_spryker/module_guide/url/url_handling_new_entity.html",a:"The following information describes how to handle URLs for other types of entities that Spryker core provides. Prerequisites Before you begin, make sure the target entity is already in your database (the one to you would like to assign URLs to). In the examples below we\u0027ll call this entity ...",t:"Handling New Types of Entity URLs"},"159":{i:0.00237406039273504,u:"../developing_with_spryker/module_guide/url/url_redirects.html",a:"A URL redirect is a special entity that consists of a source URL (which is provided by the spy_url database table), a target URL and an HTTP status code (stored in spy_url_redirect database table). Redirects are exported to the key-value storage with collectors and are matched with StorageRouter ...",t:"URL Redirects"},"160":{i:0.00105649442023772,u:"../developing_with_spryker/module_guide/utilities/about_utilities.html",a:"The following modules are utilities.   To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use the back/next buttons to move between items under the same category.  To improve readability, all long code samples and texts have ...",t:"About Utilities"},"161":{i:0.00108214638658239,u:"../developing_with_spryker/module_guide/utilities/currency.html",a:"\nThe Currency module provides an easy way to retrieve information about a currency given an ISO code.\n The methods in the CurrencyFacade will always return an instance of the CurrencyTransfer. You can get any currency by it’s ISO code or the current configured currency.\n\n Usage\n CurrencyFacade ...",t:"Currency"},"162":{i:0.00165517874298806,u:"../developing_with_spryker/module_guide/utilities/importer.html",a:"Importer module is dedicated for loading initial data in the database, when installing the application. The imported data includes: glossaries CMS pages and blocks products categories stocks prices taxes shipments Please note that Importer module is built on project level and it’s customized for ...",t:"Importer"},"163":{i:0.00108214638658239,u:"../developing_with_spryker/module_guide/utilities/logger.html",a:"Spryker contains a  PSR-3  compatible logger which can be customized to any needs. You can use the logger everywhere in the system, as in the example below: \u003c?php \n\nuse Spryker\\Shared\\Log\\LoggerTrait;\n \nclass MyClass\n{\n\n    use LoggerTrait;\n \n    public function myFunction()\n    {\n        // This ...",t:"Logger"},"164":{i:0.00108214638658239,u:"../developing_with_spryker/module_guide/utilities/money.html",a:"Money Handling monetary values can be a problem and is often quite hard. The Money module makes it easier to work with monetary values. Spryker handles all monetary values as integer and provides conversions from decimal values to cent values and vice versa. The key feature of this module is to ...",t:"Money"},"165":{i:0.00105649442023772,u:"../developing_with_spryker/module_guide/yves_components/about_yves_components.html",a:"The following modules are used to establish Yves functionality. To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use the back/next buttons to move between items under the same category.  To improve readability, all long ...",t:"About Yves Components"},"166":{i:0.00108214638658239,u:"../developing_with_spryker/module_guide/yves_components/navigation/navigation.html",a:"Overview\n The Navigation module manages multiple navigation menus that can be displayed on the frontend (Yves). Every navigation section can contain its own nested structure of navigation nodes. Navigation nodes have types that help define what kind of link they represent.\n\n The following node types ...",t:"Navigation"},"167":{i:0.00151640984315549,u:"../developing_with_spryker/module_guide/yves_components/navigation/navigation_feature_integration.html",a:"Prerequisites\n To prepare your project to work with Navigation:\n\n Require the Navigation bundles in your composer.json.\n Install the new database tables. By running vendor/bin/console propel:diff.Propel will generate a migration file with the changes.\n Apply the database changes: run ...",t:"Feature Integration - Navigation"},"168":{i:0.00151640984315549,u:"../developing_with_spryker/module_guide/yves_components/navigation/navigation_under_the_hood.html",a:"Database schema\n The Navigation module provides the spy_navigation table that stores navigation menus. They have a name field which is only used for backend display and they also have a key field used to reference the navigation menus from yves.\n \nEvery navigation entity contains some nodes stored ...",t:"Under the Hood - Navigation"},"169":{i:0.00273392129640375,u:"../developing_with_spryker/module_guide/yves_components/search/search.html",a:"One of the most important features in an e-commerce application is to give the customer the ability to find the products that he needs. Depending on how easy it is to find the products the customer is searching for and how relevant the search results are, the search feature is a crucial aspect for ...",t:"Search"},"170":{i:0.00380781967216929,u:"../developing_with_spryker/module_guide/yves_components/search/search_collector_config.html",a:"In this section you’ll learn how to easily map collected data from the database to the default Elasticsearch page mapping type. If you need information about how collectors work in general, you can read more about it on the  Collector  documentation page. First, you need to implement ...",t:"Search Collector Configuration"},"171":{i:0.00131470052115647,u:"../developing_with_spryker/module_guide/yves_components/search/search_configure_elasticsearch.html",a:"Elasticsearch is a NoSQL data store which allows us to predefine the structure of the data we’ll be storing in it. Since the data structure we use is static, we would like to define it in advance. The definitions of the indexes and mapping types are written in JSON format, just as you’ll find it in ...",t:"Configure Elasticsearch"},"172":{i:0.00348304191062866,u:"../developing_with_spryker/module_guide/yves_components/search/search_configure_features.html",a:"In this section you’ll learn how to configure faceted navigation, filters, pagination and sorting, so all the important search features that are provided by the Search module. This configuration is only relevant if you enable the three query expanders and result formatters mentioned above. ...",t:"Configure Search Features"},"173":{i:0.00131470052115647,u:"../developing_with_spryker/module_guide/yves_components/search/search_filter.html",a:"In Zed there’s a section (Search and Filters -\u003e Filter Preferences) for managing the product attributes that you’d like to filter by in the shop. There are several filter types that the framework supports at the moment: single-select: filter for one value at a time (e.g. radio group), multi-select: ...",t:"Filter Preferences - Search"},"174":{i:0.00293304480775823,u:"../developing_with_spryker/module_guide/yves_components/search/search_preferences.html",a:"In Zed there’s a section (Search and Filters -\u003e Search Preferences) for managing searchable product attributes. To be able to search after a product in the shop that has a specific attribute (e.g. color, size, etc.), you can click on “Add attribute to search” to create new, or “Edit” if it already ...",t:"Search Preferences"},"175":{i:0.00448341840929536,u:"../developing_with_spryker/module_guide/yves_components/search/search_query.html",a:"Now we have all necessary data in Elasticsearch, it’s time to display them in Yves. In order to achieve this, we first need to query Elasticsearch, which will return raw data for us that we need to  Process Query Result  to display it in our templates. In the SearchClient you can find the search() ...",t:"Search Query"},"176":{i:0.00199197976844718,u:"../developing_with_spryker/module_guide/yves_components/search/search_4_0.html",a:"The latest version of this module can be found here  Search One of the most important features in an e-commerce application is to give the customer the ability to find the specific products. Depending on how easy it is to find the products the customer is searching for and how relevant the search ...",t:"Search 4.0"},"177":{i:0.00199197976844718,u:"../developing_with_spryker/module_guide/yves_components/search/search_3_0.html",a:"The latest version of this module can be found here  Search One of the most important features in an e-commerce application is to give the customer the ability to find the products that he needs. Depending on how easy it is to find the products the customer is searching for and how relevant the ...",t:"Search 3.0"},"178":{i:0.00105649442023772,u:"../developing_with_spryker/module_guide/zed_api/zed_api.html",a:"The Spryker Framework offers a flexible REST API for Zed. It maps basic REST functionality to the persistence layer of the Spryker backend.\n\n By default, the API accepts and returns JSON as format. But it can be extended to work with any format. As for JSON, the API specification is close to JSON ...",t:"Zed API (BETA)"},"179":{i:0.00105649442023772,u:"../developing_with_spryker/module_guide/zed_api/zed_api_additional_function.html",a:"Meta information\n Links as part of the meta information will be part of the response on the same level as the data: {\n    \"data\": ...,\n    \"links\": [\n        \"self\" =\u003e ...                         \n        ...\n    ],\n    ...\n}\n “self” URIs are included, for example for adding an item.\n\n",t:"Additional Functionality - Zed API"},"180":{i:0.00105649442023772,u:"../developing_with_spryker/module_guide/zed_api/zed_api_appendix.html",a:"API Documentation\n We will soon provide an extensive documentation on the API resource URIs available and a tool to parse those to a standard.\n\n Logging\n By default all incoming requests and outgoing responses will be logged as “info” level.\n\n Security recommendations\n Secure the API with a token ...",t:"Appendix - Zed API"},"181":{i:0.00105649442023772,u:"../developing_with_spryker/module_guide/zed_api/zed_api_config.html",a:"First of all we need to decide on the resources being exposed. Those will be mapped inside the ApiDependencyProvider:\n\n \u003c?php\nuse Spryker\\Zed\\CustomerApi\\Communication\\Plugin\\Api\\CustomerApiResourcePlugin;\nuse Spryker\\Zed\\ProductApi\\Communication\\Plugin\\Api\\ProductApiResourcePlugin;\n\n    /**\n     * ...",t:"Zed API Configuration"},"182":{i:0.00105649442023772,u:"../developing_with_spryker/module_guide/zed_api/zed_api_crud_function.html",a:"Filtering\n For find action we return a paginated collection that can be limited and customized based on query string input or headers. So using the provided FilterPreProcessors one can enable filtering (conditions), sorting (and multi-sorting) and pagination.\n\n Condition filtering\n For the filtering ...",t:"CRUD Functionality - Zed API"},"183":{i:0.00105649442023772,u:"../developing_with_spryker/module_guide/zed_api/zed_api_processor_stack.html",a:"Request and pre processing\n We now need to decide further on the URL format. Should this be extension driven, which is easier to browse, or HTTP header driven, for example? What kind of URL query string transformation do we need, what kind of header parsing is required?\n\n In order to keep this ...",t:"Processor Stack - Zed API"},"184":{i:0.00105649442023772,u:"../developing_with_spryker/module_guide/zed_api/zed_api_project_implementation.html",a:"For the API and the API bundles to get activated we need to configure our own service provider stack in the Zed ApplicationDependencyProvider class:\n\n \u003c?php\n    /**\n     * @param \\Spryker\\Zed\\Kernel\\Container $container\n     *\n     * @return \\Silex\\ServiceProviderInterface[]\n     */\n    protected ...",t:"Project Implementation - Zed API"},"185":{i:0.00105649442023772,u:"../developing_with_spryker/module_guide/zed_api/zed_api_resources.html",a:"Each module can have a “{module}Api” module(e.g. CustomerApi for Customer). Such an API module exposes CRUD facade methods (find, get, add, update, remove) that can be mapped to a URL via REST resource/action resolution.\n\n The main Api module contains a dispatcher that delegates to those API module ...",t:"Zed API Resources"},"186":{i:0.00150550766230048,u:"../developing_with_spryker/module_guide/data_feed.html",a:"BETA version\n This module is still in development and for the moment is only available as beta version and non-dist repository. DataFeed modules help to query abstract products, categories, prices, availability data and related information for exporting or processing. The data Feed is not dependent ...",t:"Data Feed Modules"},"187":{i:0.00108214638658239,u:"../developing_with_spryker/module_guide/user_rights_management.html",a:"User and rights management is a general term that describes the security functionality for controlling user access to perform various roles throughout the system. In the Spryker Commerce OS user and rights management is implemented in the following three bundles: ACL - ACL stands for Access Control ...",t:"User and Rights Management"},"188":{i:0.0016989608977174,u:"../developing_with_spryker/3rd-party_integration/3rd_party_integration.html",a:"In this section you will find information about our 3rd party integration solutions. HowTos are simple instructions to guide you through the process of performing a single task.  To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can ...",t:"3rd-Party Integration"},"189":{i:0.00108642863637523,u:"../developing_with_spryker/3rd-party_integration/partner_analytics_netmind.html",a:"Netmind This integration is built and supported by our industry partner mindlab. Partner information Netmind documentation: list and link to the user guidance information   Netmind support: Support info: who to contact if there is a bug/issue   Copyright and disclaimer  ",t:"Netmind"},"190":{i:0.00105649442023772,u:"../developing_with_spryker/3rd-party_integration/ratepay/integration_payment_ratepay.html",a:"BETA version\n This module is still in development and for the moment is only available as beta version and non-dist repository. RatePAY is an online service provider that allows merchants to provide their customers secure, customized payment methods. RatePAY bears the full risk and takes over the ...",t:"Payment Integration - RatePAY"},"191":{i:0.00105649442023772,u:"../developing_with_spryker/3rd-party_integration/ratepay/integration_payment_ratepay_payment_workflow.html",a:"Invoice, Prepayment and Direct Debit methods have the same request flow.  The payment workflow consists of the following requests:\n PAYMENT INIT - Initialize the transaction and get a valid transaction-id.\n PAYMENT QUERY - Check the customer and order details, perform a configurable risk scoring, ...",t:"Payment Workflow - RatePAY"},"192":{i:0.00150550766230048,u:"../developing_with_spryker/3rd-party_integration/ratepay/integration_payment_ratepay_invoice.html",a:"Workflow Scenarios\n Integrating RatePAY Invoice Payment\n To integrate invoice payment, you need to: RatePAY invoice payment configuration and call the facade functions.\n Setting RatePAY Invoice Configuration\n The configuration to integrate invoice payments using RatePAY is:\n\n PROFILE_ID: merchant’s ...",t:"Invoice - RatePAY"},"193":{i:0.00150550766230048,u:"../developing_with_spryker/3rd-party_integration/ratepay/integration_payment_ratepay_prepayment.html",a:"Workflow Scenarios\n Integrating RatePAY Prepayment Payment\n To integrate prepayment payment: set RatePAY prepayment payment configuration and call the facade functions.\n\n Set RatePAY Prepayment Configuration\n The configuration to integrate prepayment payments using RatePAY is:\n\n PROFILE_ID: ...",t:"Prepayment - RatePAY"},"194":{i:0.00150550766230048,u:"../developing_with_spryker/3rd-party_integration/ratepay/integration_payment_ratepay_dir_deb.html",a:"Workflow Scenarios\n Integrating RatePAY  Direct Debit Payment\nIn order to integrate direct debit payment, two simple steps are needed: set RatePAY Direct Debit payment configuration and call the facade functions.\n \nSet RatePAY Direct Debit Configuration\n The configuration to integrate Direct Debit ...",t:"Direct Debit (ELV) - RatePAY"},"195":{i:0.00150550766230048,u:"../developing_with_spryker/3rd-party_integration/ratepay/integration_payment_ratepay_installment.html",a:"The shop must implement the Calculation Request operation to calculate an example installment plan and show it to the customer. Some input parameters for the calculation are passed from the shop (e.g. the shopping basket total), others are stored in the merchant’s RatePAY profile held by the Gateway ...",t:"Installment - RatePAY"},"196":{i:0.00489556756533463,u:"../developing_with_spryker/3rd-party_integration/ratepay/integration_payment_ratepay_state_machine.html",a:"Commands\n ConfirmDelivery\n \nSend delivery confirmation data to RatePAY\n Response:\n Success: Delivery confirmed\n Declined: Request format error or delivery confirmation error\n Plugin: ConfirmDeliveryPlugin\n ConfirmPayment \n\nSend payment confirmation data to RatePAY\n Response:\n Success: Payment ...",t:"RatePAY State Machine Commands and Conditions"},"197":{i:0.00105649442023772,u:"../developing_with_spryker/3rd-party_integration/ratepay/integration_payment_ratepay_structure_diag.html",a:"RatePAY Core Module Structure Diagram The RatePAY core module uses the following class structure and flow.\n",t:"RatePAY Core Module Structure Diagram"},"198":{i:0.00105649442023772,u:"../developing_with_spryker/3rd-party_integration/ratepay/integration_payment_ratepay_facade.html",a:"RatePAY Facade\n",t:"RatePAY Facade\n"},"199":{i:0.00105649442023772,u:"../developing_with_spryker/3rd-party_integration/ratepay/integration_payment_ratepay_disable_addr_updates.html",a:"To disable updates on addresses from the backend application, follow the steps described below:\n\n Step 1:\n\n Overwrite on project side  ‘/vendor/spryker/spryker/Bundles/Sales/src/Spryker/ Zed/Sales/Presentation/Detail/boxes/addresses.twig’\n Remove ‘Edit’ button\n Step 2:\n\n Overwrite on project side  ...",t:"How to disable address updates from the backend application - RatePAY"},"200":{i:0.00108642863637523,u:"../developing_with_spryker/3rd-party_integration/payone/integration_payment_payone.html",a:"We integrate with a wide range of payment methods that can be configured according to your needs and convenience. Payment method flows are configured using state machines.\n\n Payone provides six main methods of payment:\n\n Credit Card Direct Debit\n Online Transfer Paypal Prepayment Invoice We use ...",t:"Payment Integration - Payone"},"201":{i:0.00117192826878874,u:"../developing_with_spryker/3rd-party_integration/payone/integration_payment_payone_credit_card.html",a:"PCI Compliance Because of PCI compliance reasons, credit card data is communicated to the third party through AJAX calls (sensitive information stays browser side).\n PCI Compliance\n The Payment Card Industry Data Security Standard ( PCI DSS ) is a set of rules with the intention to ensure that ...",t:"Credit Card Payment - Payone"},"202":{i:0.00117192826878874,u:"../developing_with_spryker/3rd-party_integration/payone/integration_payment_payone_dir_deb.html",a:"Front-end integration\n Run the antelope build yves after you include the javascript file for credit card check inside the payment step template (e.g. src/\u003cproject_name\u003e/Yves/Checkout/Theme/\u003ccustom_theme_name\u003e/checkout/payment.twig)\n\n {% block content %}\n\u003cscript ...",t:"Direct Debit Payment- Payone"},"203":{i:0.00117192826878874,u:"../developing_with_spryker/3rd-party_integration/payone/integration_payment_payone_online_trans.html",a:"Supported online banking service providers are SofortBanking, Giropay, Electronic Payment Standard (Eps), PostFinance Card, PostFinance E-Finance, iDEAL and Przelewy24. They are enabled  through the integration with Payone, using the online transfer payment type.\n\n Each payment method is limited to ...",t:"Online Transfer Payment- Payone"},"204":{i:0.00117192826878874,u:"../developing_with_spryker/3rd-party_integration/payone/integration_payment_payone_prepayment.html",a:"Prepayment method is a safe alternative to payments involving credit cards or debit cards (such as online banking transfer). Usually bank transfer would require manual processing to mark transaction as cancelled or completed, but the process is fully automated through the integration with the Payone ...",t:"Pre-payment - Payone"},});