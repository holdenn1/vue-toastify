<h1 style='border-bottom: 1px solid #ccc'>Requirements</h1>
<p>vue version >=3.2.0</p>
<h1 style='border-bottom: 1px solid #ccc'>Installation</h1>
<code>npm install vue-toastify</code>
<h1 style='border-bottom: 1px solid #ccc'>Guide</h1>
<h5>Step 1: Connection</h5>
<p>First, you need to enable the plugin in the root of your project. When connecting, you can pass additional options such as delay, theme (day/night), position (top left, top center, top right, bottom right, bottom left), hover delay pause, close toast on click or click on the cross, offset, and your own toast cover saver.</p>
<p>First, we import the plugin</p>
<div style='text-align:center; width: 100%'>
<img  src='./src/assets/images/10.png'/>
</div>
<p>Then import the styles</p>
<div style='text-align:center; width: 100%'>
<img  src='./src/assets/images/9.png'/>
</div>
<p>Now connect the plugin and pass the parameters</p>
<div style='text-align:center; width: 100%'>
<img  src='./src/assets/images/1.png'/>
</div>
<p>To add your own cover, you need to import it first</p>
<div style='text-align:center; width: 100%'>
<img  src='./src/assets/images/5.png'/>
</div>
<p>And pass it as a parameter</p>
<div style='text-align:center; width: 100%'>
<img  src='./src/assets/images/6.png'/>
</div>
<p>You can change the cover of the three types of toast if needed, just import and pass them as parameters.</p>
<div style='text-align:center; width: 100%'>
<img  src='./src/assets/images/7.png'/>
</div>
<p>The project is written in TypeScript, so there will be hints for parameters</p>
<h5>Step 2: Import the toastify component</h5>
<p>Next, you need to add the toastify component, it does not need to be imported, it is registered globally</p>
<div style='text-align:center; width: 100%'>
<img  src='./src/assets/images/2.png'/>
</div>
<h5>Step 3: Import hook</h5>
<p>Importing the <em><strong> useToastify() </em></strong>hook</p>
<div style='text-align:center; width: 100%'>
<img  src='./src/assets/images/11.png'/>
</div>
<div style='text-align:center; width: 100%'>
<img  src='./src/assets/images/3.png'/>
</div>
<h5>Step 3: Toastify</h5>
<p>Next, we need to pass 2 parameters to <em><strong>toastify()</em></strong>, the first is the status, the second is the message.</p>
<div style='text-align:center; width: 100%'>
<img  src='./src/assets/images/4.png'/>
</div>
<p>You can use several toasts at the same time.</p>
<div style='text-align:center; width: 100%'>
<img  src='./src/assets/images/8.png'/>
</div>
</br>
<p>The toastify is ready to go!</p>
<div style='text-align:center; width: 100%'>
<p>With the "success" status, the "day" theme will look like this:</p>
<img  src='./src/assets/gif/success-day-theme.gif'/>
<div style='text-align:center; width: 100%'>
<p>With the "warning" status:</p>
<img  src='./src/assets/gif/warning-day-theme.gif'/>
<div style='text-align:center; width: 100%'>
<p>With the "error" status:</p>
<img  src='./src/assets/gif/error-day-theme.gif'/>
</div>
<div style='text-align:center; width: 100%'>
<p>With the "default" status:</p>
<img  src='./src/assets/gif/default-day-theme.gif'/>
</div>
<div style='text-align:center; width: 100%'>
<p>With the "success" status, the "night" theme will look like this:</p>
<img  src='./src/assets/gif/success-night-theme.gif'/>
</div>
<div style='text-align:center; width: 100%'>
<p>With the "warning" status:</p>
<img  src='./src/assets/gif/warning-night-theme.gif'/>
<div style='text-align:center; width: 100%'>
<p>With the "error" status:</p>
<img  src='./src/assets/gif/error-night-theme.gif'/>
</div>
