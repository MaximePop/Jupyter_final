---
title: "Jupyter Notebooks in SHS: advantages, disadvantages and best practices"
subject: "Jupyter Notebooks in SHS"
subtitle: "Petit panorama d'un outil en pleine expansion à destination des acteurs de l'Enseignement Supérieur et de la Recherche en Sciences Humaines et sociales."
authors:
  - name: "POPINEAU Maxime"
    affiliations: "Digit_Hum"
    email: "maxime.popineau@etu.univ-tours.fr"
license: CC-BY-4.0
keywords: Jupyter Notebooks, SHS
date: "2023-05-23"
venue:
  title: Lien vers le répertoire Github
  url: "https://github.com/MaximePop/JupyterSHStest"
open_access: true


---

<span style="font-size: 12px;"><i>By POPINEAU Maxime (report produced as part of a Master 2 internship co-supervised by Marie-Laure Massot, Emilien Schultz and Agnès Tricoche, as part of the Digit_Hum initiative, April-July 2023[^1] ), May 2023</i></span>

|                  |                     |                      |
|:-----------------|:------------------:|---------------------:|
|                  | ![digit_hum.png](digit_hum.png) |                     |

+++ {"part": "abstract"}

In 2014, physics researcher Fernando Pérez announced a project based on his iPython interactive programming environment for scientists: the Jupyter project. The latter is developed around an ecosystem of interactive software for programming such as: the Jupyter Hub, the JupyterLab or the Jupyter Notebook. Our paper focuses on the role of Jupyter Notebooks in the humanities and social sciences.

+++



## **1. Introduction**


A <wiki:Jupyter> Notebook is a document that can be manipulated in the web browser, made up of several cells, combining code, text and graphical visualizations, with the code able to be modified and executed interactively.  Originating from the Python community, integrating R[^2] or Julia[^3], Jupyter Notebooks support over 40 programming languages. Jupyter Notebooks, and in particular the computer language Python[^4], are beginning to be used extensively in many scientific fields, but not so much in the social sciences and humanities.

This medium can facilitate the computational practice of SHS researchers, by promoting a standard that enables them to homogenize their thoughts integrating code and to share their research easily. Jupyter Notebooks can have many advantages, such as facilitating an interdisciplinary approach, since it's easy to reuse a Notebook and modify it as required. Another advantage of Notebooks is their versatility: they can be used for both research and teaching purposes.

Although still little exploited in the SHS field, Notebooks have gained in popularity in the educational context. In France, they are currently one of the most popular tools used by computer science teachers because of their pedagogical ease, according to [](doi:10.1109/VL/HCC51201.2021.9576363)[^5].

This synthesis offers an overview of the advantages and disadvantages of this tool in the context of SHS research practice involving data processing with a programming language to varying degrees.

To give just a few examples, Jupyter Notebooks can be used in bdifferent SHS disciplines and for a variety of purposes.

- Linguistics: Notebooks are useful for computational linguistics. This notebook[^6] offers an analysis of the translation of a text into different languages. The analysis focuses on the number of words per translation and their statistical divergence. 

- In geography: Notebooks can be useful for improving collaborative work by giving greater flexibility to the processing of geolocalized data, for example by combining GeoPandas and CartoPy in a reproducible interactive interface.

- In sociology: Notebooks are used to explore statistical data widely available from institutions or research organizations participating in open science. For example, a notebook[^7] on professional mobility was created using INSEE data.

Given the diversity of uses, the question arises as to how best practices can be stabilized and how newcomers can adopt this tool. We will attempt to answer this question with a summary table based on the scientific literature that is beginning to exist on the advantages and disadvantages of Jupyter Notebooks.

## **2. Advantages of notebooks**

| Creation of a standard
| :- |
| Used in all branches of the social sciences and in many different fields.
| 100% open source.
| 40 programming languages.
| Usable on all browsers and OS (Windows, Linux, Mac). |
| Homogenizes the data created.
| Makes data interoperable between researchers.

| Makes teaching more interactive and easier.
| :- |
| Combines code, text and graphical visualizations in a document.
| Engages students by allowing them to interact with the Notebook while doing exercises.
| Promotes narration.
| Use cells to clarify steps.
| Allows users to change results using ipy widgets[^8]. 
| Reusable work
| :- |
| Easy access and sharing of work.
| Can be converted to other formats.
| Very easy to use the Github[^9] tool to present your research.
| Allows other researchers to modify the code to obtain different results.
| Allows students to send their programming work to their teachers.
| Useful for publishing articles.

| Facilitates exchanges between SHS researchers.
| :- |
| Allows both text and code to be shared in the same document. Useful for publishing articles.
| No goal set by the software: users can think about the results they want to achieve.
| Allows you to clearly explain your field of research to other researchers at a conference.
| Allows collaborative work using the same tool.

| Establishes an ecosystem of extensions and events.
| :- |
| Can be translated into other formats, such as books or slides.
| Can be shared and viewed via Nbviewer[^10] and Binder[^11]. |
| Used by a community of users who build extensions, applications and help new users.
| Promotes joint events (Jupyter Community Workshops[^12], JupyterDays[^13] and JupyterCon[^14]). |

## **3. Disadvantages**

| Requires basic knowledge
| :- |
| Requires knowledge of a computer language (Python or other).
| Offers a philosophy that is not necessarily intuitive in code execution.
| Offers less support than IDEs[^15] (e.g. Notebook doesn't tell you if there's an unused variable).
| With this highly customizable tool, it's hard to know which plugins or extensions to use.

| Reproducibility problem
| :- |
| Difficult to reproduce for beginners, as they require code to be rewritten (out of 1 million Notebooks on Github, only 4% are usable in their current state). |
| Impossible to reproduce the notebook in some cases: the code may be obsolete. It is also necessary to find the correct version of the libraries used.
| Code may be executed in a non-linear fashion, resulting in "hidden states".
| The link between the data and the notebook is not obvious: file access is one of the most common reasons why notebooks are not reproducible. You need to change the file path directly in the Notebook code.

| Tool that leads to bad code-writing habits
| :- |
| Complicated to switch from Visual Studio Code to Jupyter Notebook for beginners.
| Weak testing practice [^16]: it's complicated to make tests for a Jupyter Notebook.
| Promotes questionable practices in file naming, code versioning and modularization.
| No homogeneous rules for writing otebooks (for example, fewer comments at the end of Notebooks: most Notebooks have an introductory cell, but almost none have concluding cells). |

| A wide range of competing interactive notebook solutions makes it difficult to choose.
| :- |
| Various IDEs (PyCharm, Spyder, Visual Studio Code) enable code control with linters[^17], version control and debugging[^18].
| Cloud-based tools [^19] such as Google Collab and Azure Notebook enable collaboration with other users and version control. [^20] |
| Interactive notebooks like Apache Zeppelln [^21] or BeakerX [^22] offer a variety of similar formats, making it difficult to choose.
| Deepnote [^23] lets you collaborate in the same Notebook, whereas Jupyter Notebooks are stored locally on a computer. Deepnote supports version management and allows you to set different permissions for different Notebook users. |

## **4. Best practice**

However, most of the problems described above can be solved by using extensions or software to complement Jupyter Notebook:

- One of the criticisms levelled at Jupyter Notebooks is the lack of code auto-completion, which can cause problems for novice users: the Hinterland extension enables code auto-completion in Jupyter Notebooks.

:::{figure} ./hinterland.png
:name: Hinterland
 Example of Hinterland usage.
:::

- Another criticism is that Jupyter Notebooks are difficult to use for novice users. The "Snippets" menu makes it possible to obtain code ready for use with different libraries and for different purposes. This means that novice users don't have to look at the documentation for code syntax.

:::{figure} ./snippets.png
:name: Snippets
 Example of the use of snippets.
:::

Prerequisites: Although there are many extensions that make Jupyter Notebooks easier to use, there are some minimum requirements for using them:

- Have some knowledge of Python coding on an IDE (such as Visual Studio Code) preferably before switching to Jupyter Notebook.

- Know that you need to change file paths to be able to reuse code.

- Install Anaconda on your computer to be able to use Jupyter Notebook and other tools.

The literature identifies some best practices for building and sharing a notebook according to [](doi:10.1371/journal.pcbi.1007007). [^24] :

- The important thing is to tell the audience a story, which requires an explanation of the various steps involved in trying to solve the research question.
- It's important to document the whole process, not just the results.
- Use cells to clarify the different steps (don't use long cells with more than 100 lines).
- Use modularity: it's important to avoid duplicating code. In Notebooks, it's easy to copy/paste code and change a few lines. This makes the Notebook very complicated to read and impossible to maintain. It's better to put the code in a function and call this function in different cells. 
- Make a Github repository with a READme file and a requirement file with the different versions of the libraries.
- Set up an open source license so that the work can be reused. 
- Organize the architecture of the project folder, including data and intermediate documents.
- Use version control: the interactive aspect of the Notebook makes it easy to accidentally change code. 
- Create a "pipeline": the aim is to create a Notebook that can be reused by changing data and parameters.
- Make the Notebook as readable as possible, with a clear presentation:

## **5. Notebook** example

:::{figure} ./notebook.png
:name: Notebook
Example of how to use a Jupyter Notebook
:::

This Notebook is of very high quality.  It includes the title, creation date and authors. It contains a presentation of the data used and a table of contents. The article discussing this code is referenced. The approach is very clear: a title is present, the code has comments and the cells in text format allow you to follow the reflection. The Notebook presented is available in Web format, which is useful for users who don't have Anaconda installed on their computer.

- Export the Notebook as a PDF file and upload it to Github. This allows people who haven't installed Anaconda to see your work.

## **6. Conclusion**

Programming in science, particularly with Python, and new tools like Jupyter Notebook are important for the humanities and social sciences. Some of the criticisms levelled at Notebooks are not due to the "medium" but rather to the way people use them. Most of the problems outlined in this article have solutions: Jupyter Notebooks are highly customizable to the needs of their users. Jupyter Notebooks can be a good solution in the following situations:

- As part of a conference to show and explain the results of research products. The Notebook facilitates interaction: it's easy to demonstrate, making the presentation more dynamic.
- As part of a collaborative research project between researchers familiar with the tool and Python. It's easier to work on a common tool than with files using different software.
- As part of computer science teaching. Notebooks can be used to set up exercises that can then be done by students. Notebooks are very easy to modify: students can understand the modification in the code and see how the results evolve.

Jupyter Notebooks don't put the machine at the heart of the research process, but rather the human: the environment encourages interaction and exploration. The interactivity of Notebooks enables users to efficiently run, modify, document, explore and collaborate in a single integrated development environment, making them an excellent tool for SHS.

The Jupyter Notebook community is largely rooted in the scientific community: the Jupyter project was created by researchers for researchers. In doing so, similar values are shared around open source, helping newcomers, exploring new solutions and reproducibility. Notebooks are not just a tool, but above all a dynamic community that constantly creates new solutions for research.

With the development of new technologies in the field of research, the evolution of research and teaching in SHS seems to be taking place with programming and interactive Notebooks, in particular the Jupyter project.

# **7. Useful resources to get you started**

https://www.python.org/downloads/

<https://code.visualstudio.com/>

The first step is to choose a computer language: Python is the preferred choice for any programming beginner.  You can download Python from the official website. The second link is to download the Visual Studio Code editor, which offers very useful features for beginners and advanced users alike.

https://www.freecodecamp.org/

The FreeCodeCamp website offers resources for learning to code for free. Their youtube channel also features videos, including one on python - of very high quality - available at this address:

<https://www.youtube.com/watch?v=rfscVS0vtbw>

https://programminghistorian.org/fr/

The Programming Historian site offers online lessons to help researchers in the humanities and social sciences acquire programming skills. Lessons are available in English, Spanish and French.

<https://www.anaconda.com/download>

Anaconda lets you open and create Jupyter Notebooks. Anaconda offers many services: such as IDEs (DataSpell, Spyder) and other software such as JupyterLab, Jupyter Notebook, RStudio.

<https://jupyter.org/>

After learning how to program, we can use Jupyter Notebooks as well as the many extensions to be able to share our code and also to be able to modify other work.

<https://stackoverflow.com/>

The Stack Overflow site is a forum dedicated to the developer community, enabling users to ask questions and get answers to programming-related problems.


[^1]: This internship was carried out as part of the Translitteræ University Research School (Investissements d'avenir program ANR-10-IDEX-0001-02 PSL* and ANR-17-EURE-0025), with financial support from CAPHÉS (UMS 3610, CNRS-ENS) and AOROC (UMR 8546, CNRS-ENS-EPHE).
[^2]: R is a programming language (like Python) used in statistics and data science.
[^3]: Julia is a high-performance programming language used for scientific computing.
[^4]: Python is the most widely used and simplest programming language in Notebooks. Python is used in teaching to provide an introduction to basic programming concepts, but also in research to obtain answers to scientific questions.
[^5]: Christophe Casseau, Jean-Rémy Falleri, Xavier Blanc, Thomas Degueule. Immediate Feedback for Students to Solve Notebook Reproducibility Problems in the Classroom. 2021 IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC), Oct 2021, Saint Louis, Missouri, United States. ⟨10.1109/VL/HCC51201.2021.9576363⟩. ⟨hal-03378094⟩
[^6]: https://github.com/quinnanya/litlab\_translations/blob/master/litlab\_translations\_2019-04-15\_jupyter\_notebook.ipynb
[^7]: https://gitlab.huma-num.fr/io/mobilites-professionnelles-final/-/blob/main/notebooks/Mobilit%C3%A9s%20professionnelles.ipynb
[^8]: Ipywidgets enable Notebook interactivity. The user can use a bar, for example, to change values and then obtain the results, which are modified and returned by the algorithm. Ipywidgets are widely used in teaching, and they also enable people who don't know how to program to interact with the Notebook. 
[^9]: Github is a collaborative platform for hosting open-source software projects with code. Users have access to millions and millions of python files or Jupyter Notebooks on a wide range of subjects and disciplines. The service also offers features that programmers are looking for: continuous integration, version management ...
[^10]: Nbviewer is available at https://nbviewer.org/. This solution is used to easily share Jupyter Notebooks without having to install third-party software. The Notebook is available as a static HTML page. It is possible to use the Notebook in HTML format in a website by copying/pasting the URL into the code. A tutorial on how to use nbviewer is available here: https://www.tutorialspoint.com/jupyter/sharing_jupyter_notebook_using_github_and_nbviewer.htm
[^11]: Binder is an extension that lets you rerun code and delete or add cells. It rned the interactive Notebook, unlike nbviewer, which gives a static Notebook version.
[^12]: The Jupyter community offers many workshops on specific themes. For example, one was held in December 2022 in Paris on the JupyterLite project, which allows you to have a Jupyter Notebook running in the web browser without having to do any further installation.
[^13]: JupyterDays is a one-day conference on the subject of Jupyter Notebooks.
[^14]: JupyterCon is the conference for all Jupyter Notebook users. The event lasts several days and includes conferences, round tables and courses. JupyterCon provides community-building and face-to-face interaction for users who collaborate remotely during the rest of the year.
[^15]: An IDE (integrated development environment) is a set of tools that increases the productivity of programmers creating software. An IDE includes a text editor for programming.  Examples of IDEs include Visual Studio Code, CodeLite, NetBeans and PytCharm.
[^16]: A test is a piece of code used to check that the code works as expected and doesn't produce bugs.
[^17]: A Linter is a code analysis tool used to detect errors and syntax problems.
[^18]: Debugging is the practice of finding and correcting errors in code. Programmers study the code to determine the reason for errors. The aim is to run the code and check it step by step to solve the problem. Testing helps with debugging.
[^19]: "Cloud based" means that the data is not on a local server or personal computer, but on remote computer servers then hosted on the internet.
[^20]: Versioning allows you to have the version of the libraries used, which is useful for reproducing the Notebook. Some features are only available with a specific version of the library.
[^21]: Apache Zepellin is a project similar to Jupyter Notebooks. Apache Zepellin is a project for visually and interactively analyzing and formatting large volumes of data processed via the Spark distributed computing framework (source: https://fr.wikipedia.org/wiki/Apache_Zeppelin).
[^22]: BeakerX is an open source extension to the Jupyter Notebook project, designed to enhance the graphical visualization and interactivity of Notebooks.
[^23]: DeepNote is a collaborative Notebook that facilitates collaboration between multiple users.
[^24]: Rule, A., Birmingham, A., Zuniga, C., Altintas, I., Huang, S.-C., Knight, R., ... Rose, P. W. (2019). Ten simple rules for writing and sharing computational analyses in Jupyter Notebooks. PLOS Computational Biology, 15(7), e1007007. doi: