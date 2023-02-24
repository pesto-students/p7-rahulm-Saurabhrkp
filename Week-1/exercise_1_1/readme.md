# Exercise 1.1

- Main functionality of Web Browser
  Web browser functions are to provide the resources or information to the user when asked by them. URL is used to identify the resources and fetch them from the server and displays it to the client. It allows the user to interact with the web pages and dynamic content like surveys, forms, etc. It also allows the user to navigate through the complete web page and see its source code in the HTML format.

- DNS
  DNS stands for Domain Name System. It is the system that translates domain names (such as www.example.com) into IP addresses (such as 192.0.2.1) that computers use to identify each other on the internet. DNS servers maintain a directory of domain names and translate them to IP addresses as needed. This allows users to access websites and other resources on the internet using easy-to-remember domain names, rather than having to remember the IP addresses.

- High Level Components of Browser
  The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
  The browser engine: marshals actions between the UI and the rendering engine.
  The rendering engine: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
  Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
  UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
  JavaScript interpreter. Used to parse and execute JavaScript code.
  Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

- Rendering Engine and it's use
  A rendering engine is software that draws text and images on the screen. The engine draws structured text from a document (often HTML), and formats it properly based on the given style declarations (often given in CSS). Examples of layout engines: Blink, Gecko, EdgeHTML, WebKit.

- Parsers
  Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run, for example the JavaScript engine inside browsers.The browser parses HTML into a DOM tree. HTML parsing involves tokenization and tree construction. HTML tokens include start and end tags, as well as attribute names and values. If the document is well-formed, parsing it is straightforward and faster. The parser parses tokenized input into the document, building up the document tree. When the HTML parser finds non-blocking resources, such as an image, the browser will request those resources and continue parsing. Parsing can continue when a CSS file is encountered, but `<script>` tags—particularly those without an async or defer attribute—blocks rendering, and pauses parsing of HTML. When the browser encounters CSS styles, it parses the text into the CSS Object Model (or CSSOM), a data structure it then uses for styling layouts and painting. The browser then creates a render tree from both these structures to be able to paint the content to the screen. JavaScript is also downloaded, parsed, and then executed.

- Tree Construction
  First, the browser combines the DOM and CSSOM into a "render tree," which captures all the visible DOM content on the page and all the CSSOM style information for each node. To construct the render tree, the browser roughly does the following: Starting at the root of the DOM tree, traverse each visible node. Some nodes are not visible (for example, script tags, meta tags, and so on), and are omitted since they are not reflected in the rendered output. Some nodes are hidden via CSS and are also omitted from the render tree; for example, the span node---in the example above---is missing from the render tree because we have an explicit rule that sets the "display: none" property on it. For each visible node, find the appropriate matching CSSOM rules and apply them. Emit visible nodes with content and their computed styles.

- Order of Script Processing
  When the browser processes an HTML document, it does so from top to bottom. Upon encountering a `<script>` tag, it halts (“blocks”) further processing in order to download the referenced script file. Only after that download has completed and the respective JavaScript code has been processed, HTML processing continues

- Defer & Async Loading
  defer and async are attributes that can be used when loading a script on a web page.

  defer tells the browser to load the script after the page has finished parsing, but before the page's load event is fired. This means that any other elements that are waiting for the script to load (such as other scripts that depend on the first script) will not be blocked and can continue to load. This can improve the overall loading performance of the page.

  async tells the browser to download the script while the page is still parsing and to execute it as soon as it is available. This can also improve the overall loading performance of the page, as the browser can continue to download and parse other resources while the script is loading. However, unlike defer, async scripts do not guarantee execution order, and the script execution may interrupt the parsing of the HTML document.

  It's worth noting that if you're loading a script that doesn't have any dependencies, it's best to use async as it will not block the parsing of the page and will load and execute as soon as it is available. On the other hand, if you're loading a script that other scripts depend on, it's best to use defer to ensure that the script is loaded and executed in the correct order.

- Layout and Painting
  The layout (also called reflow) peace will be in charge to calculate the positions and dimensions of each node on the screen. For instance, if you rotate your phone, or if you resize your browser, the layout peace will be executed. Now that we know which nodes are visible, and their computed styles and geometry, we can pass this information to the final stage, which converts each node in the render tree to actual pixels on the screen. This step is often referred to as “painting”, “rasterizing.” or “repainting”.
