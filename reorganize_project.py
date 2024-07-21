import os
import shutil

# Define the necessary directory structure
directories = ['public', 'src']

# Create the directories if they don't exist
for directory in directories:
    if not os.path.exists(directory):
        os.makedirs(directory)

# Move index.html to the public directory
shutil.move('index.html', 'public/index.html')

# Move all .js files to the src directory
js_files = [file for file in os.listdir() if file.endswith('.js')]
for js_file in js_files:
    shutil.move(js_file, f'src/{js_file}')

# Update import paths in src/index.js
index_js_path = 'src/index.js'

with open(index_js_path, 'r') as file:
    content = file.read()

content = content.replace("import theme from './theme';", "import theme from './src/theme';")
content = content.replace("import GlobalStyle from './globalStyle';", "import GlobalStyle from './src/globalStyle';")
content = content.replace("import Home from './Home';", "import Home from './src/Home';")
content = content.replace("import About from './About';", "import About from './src/About';")
content = content.replace("import Contact from './Contact';", "import Contact from './src/Contact';")
content = content.replace("import Header from './Header';", "import Header from './src/Header';")
content = content.replace("import Footer from './Footer';", "import Footer from './src/Footer';")

with open(index_js_path, 'w') as file:
    file.write(content)

print("Project files have been reorganized successfully.")
