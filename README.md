## 🧪 Web Technologies Labs
Here is the web application dedicated to teaching 
second year students web technologies. 


## ☁️ Installation

For mac with M1 processor install ruby using
```sh
PKG_CONFIG_PATH=/opt/local/lib/openssl-1.1/pkgconfig rvm install 3.0 --with-openssl-lib=/opt/local/lib/openssl-1.1 --with-openssl-include=/opt/local/include/openssl-1.1
```

In order to run the web application execute the following commands
```sh
# Install dependencies
gem install bundler jekyll

# Start the application using
bundle exec jekyll serve
```