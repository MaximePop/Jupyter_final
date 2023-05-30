---
title: "An overview of computer practices in research publications in the HAL database."
subject: "Discovery of libraries and APIs."
subtitle: "An example of the best practices to put in place to constitute a Notebook."
authors:
  - name: "POPINEAU Maxime"
    affiliations: "Digit_Hum"
    email: "maxime.popineau@etu.univ-tours.fr"
license: CC-BY-4.0
keywords: "Jupyter Notebooks, API, tutoriel"
venue:
  title: Lien vers la documentation de l'API de HAL.
  url: "https://api.archives-ouvertes.fr/docs/search"
open_access: true
repository:
  url: https://github.com/MaximePop/Jupyter1
html:
  use_repository_button: true

---
By POPINEAU Maxime (report produced as part of a Master 2 internship co-supervised by Marie-Laure Massot, Emilien Schultz and Agnès Tricoche, as part of the Digit_Hum initiative, from April-July 2023)[^1].

## <span style="font-size: 14pt"> Information on the data.</span>

The data used in this notebook comes from the HAL website (https://hal.science/). The HAL multi-disciplinary open archive is designed for the deposit and open access dissemination of scientific work by researchers, from French and foreign teaching and research establishments, and public and private laboratories. Its online interface enables knowledge to be shared freely. It is also possible to interact with the HAL database via an API*, and in particular to interrogate it to carry out searches according to various criteria, then to retrieve the results in different structured data formats.

An API (Application Programming Interface) provides "endpoints" for interacting with their website to retrieve information through searches. APIs make it easier for multiple applications to communicate with each other, enabling them to exchange information. The aim is for developers to create applications that can use several APIS at the same time.

Using an API also requires a "query string", which is a part to be added to the right of the base URL to include parameters and values.

An example of a query string is https://api.archives-ouvertes.fr/search/?q=%22jupyter%20notebook%22. This URL works directly in our web browser and returns the results of our search.

https://api.archives-ouvertes.fr/search is the first part that allows you to search the Open Archives API. The second part, ?q=%22jupyter%20notebook%22, is used to specify our query, which is "jupyter notebook".

Certain characters, such as spaces and double quotes, must be transmitted correctly via the HTTP protocol in order to be encoded. The %22 corresponds to the ASCII encoding of the double quotation mark character, and the %20 corresponds to the encoding of the space character. This allows the computer to make the request on "jupyter notebook" and not "jupyter" and "notebook" separately.

Using an API, you can query the data using parameters, for example to find out the number of articles published in HAL in 2014.

In this notebook, we'll look at how to use the HAL API, as well as the pandas and matplotlib libraries. 

:::{attention}Python skills required.
This Jupyter Notebook requires Python skills. However, there is a way for non-programmers to interact with the HAL API below:

:::

:::{note}For people who don't know Python.
IpyWidgets allow users who don't know how to code to use the HAL API with parameters such as document type or years.
:::


## <span style="font-size: 14pt"> Objectives of this Jupyter notebook.</span>

Ce Jupyter Notebook vise à :

1. Faire un panorama des pratiques numériques des chercheurs.
2. Fournir un exemple de Jupyter Notebook reproductible et de qualité. 
3. Enseigner des compétences aux utilisateurs débutants ou expérimentés avec Python.

## <span style="font-size: 14pt"> Required skills.</span>

Ce Jupyter Notebook est à destination d'un public débutant. Il est préférable de connaître le langage informatique Python pour suivre le Notebook, mais cela n'est pas obligatoire.

Le document permet d'acquérir des compétences variées comme :

1. Savoir utiliser les différentes librairies comme pandas et matplotlib.
2. Utiliser les fonctions en Python pour éviter la duplication du code.
3. Savoir faire une requête dans une API.


## Section 0: Importing libraries.

In this section, we will import the libraries required for our analysis.

:::{important}The role of libraries

The requests and json library is used to make requests in HAL's API.

Pandas is used for data analysis. The library provides functions for creating, manipulating and analyzing DataFrames (arrays).

Matplotlib is used to create graphs and visualize data.

:::


```python
import requests, json
import pandas as pd
import matplotlib.pyplot as plt
```

## Section 1: Analysis of the number of publications citing Python and Jupyter Notebooks.

We can do a stastic analysis of the number of publications in the HAL database and compare with the use of Python and Jupyter Notebooks.

## <span style="font-size: 12pt">1.0: Use a function that returns the number of articles per year based on a search. </span>


::{tip}Good practice

The functions make the code easier to read and reduce duplication. They are part of the best practices to adopt in a notebook.

::


To query the API, you need to read the HAL site documentation available at this address: https://api.archives-ouvertes.fr/docs/search


```python
def get_publication_counts(query):
    # Perform a request to obtain the total number of publications
    req = requests.get(f"https://api.archives-ouvertes.fr/search/?q=text_fulltext:({query})&rows=0&facet=true&facet.field=publicationDateY_i")
    req_json = req.json()
    nb = req_json["response"]["numFound"]
    print(f"The total number of results is: {nb}\n")

    # Perform a request to obtain the number of publications per year
    year_counts = []
    for year in range(1995, 2023):
        req = requests.get(f"https://api.archives-ouvertes.fr/search/?q=text_fulltext:({query}) AND publicationDateY_i:{year}&rows=0")
        req_json = req.json()
        year_count = req_json["response"]["numFound"]
        year_counts.append((year, year_count))

    # Transform the list of tuples into a pandas DataFrame and return it
    df = pd.DataFrame(year_counts, columns=["Year", "Number of publications"])
    return df

```

Nous allons ensuite appelet cette fonction et imprimer le dataframe créé grâce à la librairie Pandas.


```python
df = get_publication_counts("python")
print(df)
```

    Le nombre total de résultats est de : 29737
    
        Année  Nombre de publications
    0    1995                       2
    1    1996                       1
    2    1997                       3
    3    1998                       4
    4    1999                       7
    5    2000                       8
    6    2001                      10
    7    2002                      13
    8    2003                      32
    9    2004                      32
    10   2005                      68
    11   2006                     114
    12   2007                     108
    13   2008                     161
    14   2009                     224
    15   2010                     328
    16   2011                     444
    17   2012                     566
    18   2013                     660
    19   2014                     877
    20   2015                    1048
    21   2016                    1386
    22   2017                    1930
    23   2018                    2606
    24   2019                    3577
    25   2020                    4154
    26   2021                    5148
    27   2022                    5169
    

The dataframe shows a significant increase in Python-related articles in the HAL database. The number of articles on Python increased from 10 in 2001 to 444 in 2011 and 5143 in 2021, a 500-fold increase in the space of twenty years. It is important to note that 2022 is the first year that the number of articles about Python has declined from the previous year since 1996.

## <span style="font-size: 12pt">1.1: Make a graph with the Matplotlib library to see the number of Python posts by year. </span>

We will now move to the graphic representation with the Matplotlib library.


```python

# Perform a request to obtain the number of articles with the keyword "Python"
query = "python"
req = requests.get(f"https://api.archives-ouvertes.fr/search/?q=text_fulltext:({query})&rows=0&facet=true&facet.field=producedDateY_i")
req_json = req.json()
nb = req_json["response"]["numFound"]
print(f"The number of articles containing the keyword '{query}' is: {nb}\n")

# Perform a request to obtain the number of articles with the keyword "Python" per year
year_counts = req_json["facet_counts"]["facet_fields"]["producedDateY_i"]
year_counts = [year_counts[i:i+2] for i in range(0, len(year_counts), 2) if int(year_counts[i]) >= 1995]
years = [int(year) for year, count in year_counts]
counts = [count for year, count in year_counts]

# Creating the graph
plt.bar(years, counts)
plt.title("Number of results related to Python in the HAL database per year (after 1995)")
plt.xlabel("Year")
plt.ylabel("Number of publications")
plt.show()

```

    Le nombre d'articles contenant le mot clé 'python' est de : 29737
    
    
    
![png](output_15_1.png)
    

::{note}
Matplotlib allows us to visualize the increase in the number of articles on Python in the last 25 years in HAL. We note that the year 2023 may be a drop in the number of articles published on Python because five months have already passed and there are barely 1000 articles in the database.
::

The year 2023 will probably mark a decrease in the number of articles published on Python in the HAL database because 5 months have already passed and there are not even 1000 articles.

## <span style="font-size: 12pt"> 1.2: Get results for Jupyter Notebooks.</span>

We call the same function as in 1.0

```python
df = get_publication_counts("jupyter AND (notebook OR notebooks)")
print(df)
```

    Le nombre total de résultats est de : 845
    
        Année  Nombre de publications
    0    1995                       0
    1    1996                       0
    2    1997                       0
    3    1998                       0
    4    1999                       0
    5    2000                       0
    6    2001                       0
    7    2002                       0
    8    2003                       0
    9    2004                       0
    10   2005                       0
    11   2006                       0
    12   2007                       0
    13   2008                       0
    14   2009                       0
    15   2010                       0
    16   2011                       0
    17   2012                       0
    18   2013                       0
    19   2014                       0
    20   2015                       1
    21   2016                      12
    22   2017                      24
    23   2018                      69
    24   2019                     107
    25   2020                     138
    26   2021                     213
    27   2022                     224
    

The Dataframe shows a significant increase in articles mentioning Jupyter Notebooks (with and without "s") in the HAL database. They go from 12 in 2016 to 70 (multiplied by 5) in 2018 and then to 223 in 2022. Thus, the number of publications filed in HAL citing Jupyter Notebooks has been multiplied by about 19 between 2016 and 2022.

It is nevertheless important to compare this increase in interest for Python and Jupyter Notebooks with the increase in the number of articles in HAL. Indeed, this increase in the number of articles may not be the result of an increase in interest but a simple increase in the number of articles deposited in the open archive.

## <span style="font-size: 12pt"> 1.3: Calculate the percentage of articles mentioning Python and Jupyter Notebooks relative to the total number of articles published in HAL over time. </span>

We use the HAL API and the panda library to create an array.

```python
# Retrieve the total number of articles for each year
total_counts = []
for year in range(1995, 2023):
    req = requests.get(f"https://api.archives-ouvertes.fr/search/?q=*&fq=producedDateY_i:{year}&rows=0")
    req_json = req.json()
    year_count = req_json["response"]["numFound"]
    total_counts.append((year, year_count))
total_df = pd.DataFrame(total_counts, columns=["year", "total_articles"])

# Retrieve the number of articles related to Python for each year
python_counts = []
for year in range(1995, 2023):
    req = requests.get(f"https://api.archives-ouvertes.fr/search/?q=text_fulltext:(Python)&fq=producedDateY_i:{year}&rows=0")
    req_json = req.json()
    year_count = req_json.get("response", {}).get("numFound", 0)
    python_counts.append((year, year_count))
python_df = pd.DataFrame(python_counts, columns=["year", "python_articles"])

# Retrieve the number of articles related to Jupyter Notebooks for each year
jupyter_counts = []
for year in range(1995, 2023):
    req = requests.get(f"https://api.archives-ouvertes.fr/search/?q=text_fulltext:(jupyter AND (notebook OR notebooks))&fq=producedDateY_i:{year}&rows=0")
    req_json = req.json()
    year_count = req_json.get("response", {}).get("numFound", 0)
    jupyter_counts.append((year, year_count))
jupyter_df = pd.DataFrame(jupyter_counts, columns=["year", "jupyter_articles"])

# Merge the three dataframes
merged_df = pd.merge(total_df, python_df, on="year")
merged_df = pd.merge(merged_df, jupyter_df, on="year")

# Calculate the percentage of articles related to Python and Jupyter Notebooks for each year.
merged_df["percent_python"] = merged_df["python_articles"] / merged_df["total_articles"] * 100
merged_df["percent_jupyter"] = merged_df["jupyter_articles"] / merged_df["total_articles"] * 100

# Visualize the dataframe
print(merged_df)

```

        year  total_articles  python_articles  jupyter_articles  percent_python  \
    0   1995           22489                2                 0        0.008893   
    1   1996           24106                1                 0        0.004148   
    2   1997           25854                4                 0        0.015471   
    3   1998           27630                4                 0        0.014477   
    4   1999           28524                6                 0        0.021035   
    5   2000           32962                8                 0        0.024270   
    6   2001           34906               10                 0        0.028648   
    7   2002           42052               13                 0        0.030914   
    8   2003           51433               31                 0        0.060273   
    9   2004           62754               34                 0        0.054180   
    10  2005           83609               67                 0        0.080135   
    11  2006           99794              114                 0        0.114235   
    12  2007          109924              109                 0        0.099159   
    13  2008          115399              160                 0        0.138649   
    14  2009          124946              227                 0        0.181678   
    15  2010          137047              332                 0        0.242253   
    16  2011          142782              447                 0        0.313065   
    17  2012          149234              564                 0        0.377930   
    18  2013          158251              662                 0        0.418323   
    19  2014          164624              874                 0        0.530907   
    20  2015          175373             1055                 1        0.601575   
    21  2016          186786             1390                13        0.744167   
    22  2017          194924             1940                23        0.995260   
    23  2018          198273             2596                68        1.309306   
    24  2019          199952             3580               108        1.790430   
    25  2020          172297             4138               138        2.401667   
    26  2021          180873             5157               212        2.851172   
    27  2022          156396             5162               221        3.300596   
    
        percent_jupyter  
    0          0.000000  
    1          0.000000  
    2          0.000000  
    3          0.000000  
    4          0.000000  
    5          0.000000  
    6          0.000000  
    7          0.000000  
    8          0.000000  
    9          0.000000  
    10         0.000000  
    11         0.000000  
    12         0.000000  
    13         0.000000  
    14         0.000000  
    15         0.000000  
    16         0.000000  
    17         0.000000  
    18         0.000000  
    19         0.000000  
    20         0.000570  
    21         0.006960  
    22         0.011799  
    23         0.034296  
    24         0.054013  
    25         0.080094  
    26         0.117209  
    27         0.141308  
    

The table shows that the percentage of documents mentioning Python and Jupyter Notebooks increases over the years in the total of documents published in HAL. The interest in this programming language and this type of interactive notebooks therefore seems to increase significantly in the research.

 Indeed, while in 2002, Python documents represented only 0.03% of the total documents in HAL, this figure rose to 0.37% in 2012 and reached 3.31% in 2022. It should also be noted that the Jupyter project was launched in 2014 and that the first results appear in 2015 with a document dealing with Jupyter Notebooks. In 2019, the percentage of documents related to Jupyter Notebooks represented 0.05% of the total number of documents present in HAL. This figure is 0.14% in 2022. Although interest in Python and Jupyter Notebooks is on the rise, the number of articles about them remains relatively low in the HAL database.

## Section 2: Analysis work on "Python" and "Jupyter Notebook" research.

This section allows you to learn how to make a multi-criteria query in the HAL API to obtain a particular type of document (articles, communication or other) within a specific search (in our example, the search for the keywords "Python" or Jupyter Notebook(s)). We will also see how to recover in the HAL API the field of research to identify the disciplines that integrate the most Jupyter Notebooks in their research or teaching practice. Our hypothesis being of course that these tools are more present in computer science and in scientific disciplines than in Humanities and Social Sciences. This will allow us to refine the analysis of the results obtained in the previous sections.

## <span style="font-size: 12pt"> 2.0: Obtain document type based on a search. </span>

To query the API, you need to read the HAL site documentation available at this address: https://api.archives-ouvertes.fr/docs/search

```python
def get_doc_types(query):
    req = requests.get(f"https://api.archives-ouvertes.fr/search/?q={query}&rows=0&facet=true&facet.field=docType_s")
    req_json = req.json()
    doc_types = req_json["facet_counts"]["facet_fields"]["docType_s"]
    doc_types = [doc_types[i:i+2] for i in range(0, len(doc_types), 2)]
    total_docs = req_json["response"]["numFound"]
    doc_types_dict = {doc_type: count/total_docs*100 for doc_type, count in doc_types}
    return doc_types_dict
```

We make a function that we will call in the rest of our code as in Section 1.


```python
doc_types = get_doc_types("text_fulltext:(python)")
print(doc_types)
```

    {'ART': 47.17355483068231, 'COMM': 25.587651746981876, 'THESE': 11.974980663819485, 'UNDEFINED': 5.346874264384437, 'REPORT': 2.649897434172916, 'MEM': 2.2564481958502873, 'COUV': 1.4863637892188184, 'POSTER': 0.8339778726838618, 'HDR': 0.6860140565625316, 'OTHER': 0.5481386824494737, 'OUV': 0.41362612233917345, 'LECTURE': 0.32283014426472073, 'PROCEEDINGS': 0.211857282173723, 'SOFTWARE': 0.1715035141406329, 'BLOG': 0.11433567609375525, 'PRESCONF': 0.09079597807445271, 'ISSUE': 0.030265326024817567, 'VIDEO': 0.023539698019302554, 'OTHERREPORT': 0.016814070013787537, 'REPORT_FORM': 0.013451256011030031, 'REPORT_LICE': 0.013451256011030031, 'REPORT_LABO': 0.010088442008272523, 'ETABTHESE': 0.0033628140027575078, 'MAP': 0.0033628140027575078, 'MEMLIC': 0.0033628140027575078, 'REPORT_LPRO': 0.0033628140027575078, 'REPORT_MAST': 0.0033628140027575078, 'SYNTHESE': 0.0033628140027575078, 'TRAD': 0.0033628140027575078, 'CREPORT': 0.0, 'DOUV': 0.0, 'IMG': 0.0, 'MANUAL': 0.0, 'NOTE': 0.0, 'NOTICE': 0.0, 'PATENT': 0.0, 'REPACT': 0.0, 'REPORT_COOR': 0.0, 'REPORT_DOCT': 0.0, 'REPORT_ETAB': 0.0, 'REPORT_FPROJ': 0.0, 'REPORT_GLICE': 0.0, 'REPORT_GMAST': 0.0, 'REPORT_RETABINT': 0.0, 'REPORT_RFOINT': 0.0, 'SON': 0.0}
    

We report that among the documents related to Python in the HAL database, scientific articles represent 47%, followed by 25% communications, and 11% theses. On the other hand, prices represent only a small proportion of 0.32%.


```python
doc_types = get_doc_types("jupyter AND (notebook OR notebooks)")
print(doc_types)
```

    {'ART': 39.130434782608695, 'COMM': 32.608695652173914, 'BLOG': 6.521739130434782, 'LECTURE': 6.521739130434782, 'UNDEFINED': 5.434782608695652, 'OUV': 2.1739130434782608, 'REPORT': 2.1739130434782608, 'SOFTWARE': 2.1739130434782608, 'POSTER': 1.0869565217391304, 'THESE': 1.0869565217391304, 'VIDEO': 1.0869565217391304, 'COUV': 0.0, 'CREPORT': 0.0, 'DOUV': 0.0, 'ETABTHESE': 0.0, 'HDR': 0.0, 'IMG': 0.0, 'ISSUE': 0.0, 'MANUAL': 0.0, 'MAP': 0.0, 'MEM': 0.0, 'MEMLIC': 0.0, 'NOTE': 0.0, 'NOTICE': 0.0, 'OTHER': 0.0, 'OTHERREPORT': 0.0, 'PATENT': 0.0, 'PRESCONF': 0.0, 'PROCEEDINGS': 0.0, 'REPACT': 0.0, 'REPORT_COOR': 0.0, 'REPORT_DOCT': 0.0, 'REPORT_ETAB': 0.0, 'REPORT_FORM': 0.0, 'REPORT_FPROJ': 0.0, 'REPORT_GLICE': 0.0, 'REPORT_GMAST': 0.0, 'REPORT_LABO': 0.0, 'REPORT_LICE': 0.0, 'REPORT_LPRO': 0.0, 'REPORT_MAST': 0.0, 'REPORT_RETABINT': 0.0, 'REPORT_RFOINT': 0.0, 'SON': 0.0, 'SYNTHESE': 0.0, 'TRAD': 0.0}
    

The contast is the same for the Jupyter Notebooks: the documents are 39% scientific articles, the communications 32% and the blogs 6.52%. Prices represent only 6%.

We may also wonder in what discipline Jupyter Notebooks are used. Our hypothesis is that this format is more used in computer science and in scientific disciplines such as physics.

## <span style="font-size: 12pt"> 2.1 : Obtenir le domaine des articles concernant les Jupyter Notebooks.</span>

We will now focus on the disciplines that mention Jupyter Notebooks.


```python
# Perform a request to obtain the number of documents containing "jupyter" and "notebook(s)"
req = requests.get("https://api.archives-ouvertes.fr/search/?q=text_fulltext:(jupyter AND (notebook OR notebooks))&rows=0&facet=true&facet.field=domain_s")

# Get the JSON data from the request
req_json = req.json()

# Extract the domains and their counts from the JSON response
domain_counts = req_json["facet_counts"]["facet_fields"]["domain_s"]
domain_counts = [(domain_counts[i], domain_counts[i+1]) for i in range(0, len(domain_counts), 2)]

# Split the multiple domains and their counts into individual entries
domain_counts_split = []
for domain_count in domain_counts:
    domains = domain_count[0].split(';')
    for domain in domains:
        domain_counts_split.append((domain.strip(), domain_count[1]))  # Keep the full domain

# Calculate the total number of documents
total = sum([count for _, count in domain_counts_split])

# Calculate the percentage of documents per domain
domain_percents = [(domain[0], domain[1]/total*100) for domain in domain_counts_split]

# Filter domains with a single word and a percentage greater than 0.5% and remove specific domains
domain_percents_filtered = [(domain, percent) for domain, percent in domain_percents if percent > 0.5 and len(domain.split()) == 1
                            and not any(domain_specific in domain for domain_specific in ["1.info.info-ai", "1.info.info-bi", "1.phys.astr", "info.info-lg", "sdv.neu", "sdu.ocean", "math.math-st"])]

# Remove domains starting with "1"
domain_percents_filtered = [(domain, percent) for domain, percent in domain_percents_filtered if not domain.startswith("1")]

# Create a dataframe from the filtered percentages and sort in descending order
df = pd.DataFrame(domain_percents_filtered, columns=["Domain", "Percentage"])
df = df.sort_values(by=["Percentage"], ascending=False)

# Display the dataframe
print(df)

```

       Domaine  Pourcentage
    0   0.info    17.933810
    1    0.sdv     7.245081
    2   0.phys     4.338104
    3    0.sdu     4.069767
    4    0.shs     3.890877
    5   0.math     2.996422
    6    0.spi     2.862254
    7    0.sde     1.833631
    8   0.stat     1.654741
    9   0.scco     1.162791
    10  0.chim     0.983900
    

The results obtained confirm our hypothesis. Jupyter Notebooks are beginning to be used in SHS disciplines, but very few: 3.8%. The change in the use of Notebooks is more marked in computer science: 17%, in Statistics or in life sciences: 7%. 

Indeed, it still seems quite complicated to find Notebooks available in SHS whether in History or Geography (not to mention archaeology, literature or philosophy). One explanation could be that the practice of Notebooks in SHS is new and also that the social sciences have less need to use programming languages in their daily practice. 

Finally, the lack of resources for training and cases of studies on the use of Jupyter Notebooks in the context of SHS seem to be a hindrance to the appropriation of its tools by SHS practitioners.

## Section 3: General work on researchers’ digital practices.

We will see in this section which software and different computer languages (other than Python) the researchers use most in the HAL database.

## <span style="font-size: 12pt"> 3.0: Researchers’ other digital practices. </span>

```python
# Liste des termes de recherche
terms = ["langage de programmation Julia", "Rstudio", "Python", "pascal langage informatique", "Matlab", "Javascript", "Spss", "Stata", "Fortran", "Javascript", "Bash", "Rust", "SAS", "Excel", "Libreoffice", "Perl", "HTML"]

# Dictionnaire pour stocker les résultats
results = {}

# Pour chaque terme de recherche, faire une requête et extraire le nombre total de résultats
import pandas as pd

results = {}
terms = [...]  # List of terms

for term in terms:
    req = requests.get(f"https://api.archives-ouvertes.fr/search/?q={term}&rows=0")
    req_json = req.json()
    total = req_json["response"]["numFound"]
    results[term] = total

# Display the results as a table
df = pd.DataFrame.from_dict(results, orient="index", columns=["Number of documents"])
df = df.sort_values(by=["Number of documents"], ascending=False)

print(df)

```

                                    Nombre de documents
    SAS                                           10756
    Matlab                                         2848
    HTML                                           2729
    Python                                         2632
    Rust                                           1111
    Perl                                            852
    Excel                                           661
    Fortran                                         541
    Javascript                                      432
    Stata                                           423
    Spss                                            354
    pascal langage informatique                     214
    Bash                                             47
    Rstudio                                          42
    Libreoffice                                      12
    langage de programmation Julia                    8
    

It is interesting to see the different digital practices of researchers. Python has become very important but it is important to see that researchers also use other computer languages such as HTML, Perl, Pascal or Javascript. Researchers also use software such as Rstudio, LibreOffice and especially Excel.

## <span style="font-size: 12pt"> 3.1: Key document types. </span>

It is important to see other digital practices of researchers and compare the type of document produced in the HAL platform.


```python
# Liste des termes de recherche
terms = ["langage de programmation Julia", "Rstudio", "Python", "pascal langage informatique", "Matlab", "Javascript", "Spss", "Stata", "Fortran", "Javascript", "Bash", "Rust", "SAS", "Excel", "Libreoffice", "Perl", "HTML"]

# Dictionnaire pour stocker les résultats
results = {}

# Pour chaque terme de recherche, faire une requête et extraire les pourcentages de chaque type de document
for term in terms:
    doc_types_dict = get_doc_types(term)
    results[term] = doc_types_dict

# Afficher les résultats sous forme de tableau
df_list = []
for term, doc_types_dict in results.items():
    df = pd.DataFrame.from_dict(doc_types_dict, orient="index", columns=[term])
    df = df.loc[df[term] > 0].sort_values(by=[term], ascending=False).head(3)
    df.dropna(axis=1, inplace=True)
    df_list.append(df)

df_final = pd.concat(df_list, axis=1)
df_final.fillna("", inplace=True)
df_final.dropna(axis=0, how='all', inplace=True)
print(df_final)
```

              langage de programmation Julia    Rstudio     Python  \
    COMM                                62.5  33.333333  24.620061   
    THESE                               25.0              6.458967   
    LECTURE                             12.5                         
    ART                                       23.809524  48.138298   
    REPORT                                      9.52381              
    COUV                                                             
    POSTER                                                           
    MEM                                                              
    BLOG                                                             
    UNDEFINED                                                        
    OTHER                                                            
    
              pascal langage informatique     Matlab Javascript       Spss  \
    COMM                        41.588785  42.029494  55.092593   17.79661   
    THESE                       13.084112  14.255618   6.712963  11.864407   
    LECTURE                                                                  
    ART                         21.495327  31.671348  16.203704  53.954802   
    REPORT                                                                   
    COUV                                                                     
    POSTER                                                                   
    MEM                                                                      
    BLOG                                                                     
    UNDEFINED                                                                
    OTHER                                                                    
    
                   Stata    Fortran       Bash       Rust        SAS      Excel  \
    COMM                  22.365989  21.276596  20.432043  27.789141  20.121029   
    THESE      12.056738                         5.310531                         
    LECTURE                                                                       
    ART        39.479905   38.44732  38.297872  64.626463  55.076237  32.526475   
    REPORT                15.711645                                               
    COUV       11.820331             10.638298                                    
    POSTER                                                  4.555597              
    MEM                                                               24.054463   
    BLOG                                                                          
    UNDEFINED                                                                     
    OTHER                                                                         
    
              Libreoffice       Perl       HTML  
    COMM        41.666667  20.657277  26.419934  
    THESE                                        
    LECTURE                                      
    ART                     72.41784  47.196775  
    REPORT      16.666667                        
    COUV                                         
    POSTER                                       
    MEM                                          
    BLOG             25.0                        
    UNDEFINED               1.643192             
    OTHER                               4.87358  
    

Based on the results obtained, it appears that the types of documents most frequently associated with our search terms are either scientific articles or communications which is the same result as for "Python" and "Jupyter Notebooks" obtained in section 2.0

We have seen how to put parameters in our query with the "query string" but there is another way.

You can create a dictionary and the parameters are passed as arguments. When the request is made, the library requests automatically builds the URL with the parameters specified in the params dictionary. This allows you to specify parameters in a more structured and flexible way, using dictionary syntax.

```python
# Effectuer une requête pour obtenir les types de document pour tous les documents dans HAL
params = {
    "q": "*:*",
    "rows": 0,
    "fl": "docType_s",
    "facet": "true",
    "facet.field": "docType_s"
}
req = requests.get("https://api.archives-ouvertes.fr/search/", params=params)
req_json = req.json()

# Extraire les types de document et leurs nombres de la réponse JSON
doc_types = req_json["facet_counts"]["facet_fields"]["docType_s"]
doc_types_dict = {doc_type: count for doc_type, count in zip(doc_types[::2], doc_types[1::2])}

# Créer un DataFrame à partir des types de document
df = pd.DataFrame.from_dict(doc_types_dict, orient="index", columns=["Nombre de documents"])
df = df.sort_values(by=["Nombre de documents"], ascending=False)

# Calculer les pourcentages de chaque type de document par rapport au total
total_documents = df["Nombre de documents"].sum()
df["Pourcentage"] = df["Nombre de documents"] / total_documents * 100

# Afficher le DataFrame
print(df)
```

                     Nombre de documents  Pourcentage
    ART                          1626205    47.971201
    COMM                          803641    23.706497
    COUV                          290548     8.570836
    THESE                         143901     4.244916
    OUV                            98939     2.918588
    UNDEFINED                      66741     1.968784
    MEM                            60481     1.784121
    OTHER                          59962     1.768811
    REPORT                         59718     1.761613
    IMG                            56724     1.673294
    POSTER                         49283     1.453793
    ISSUE                           9996     0.294871
    NOTICE                          8268     0.243897
    PROCEEDINGS                     8016     0.236463
    HDR                             6845     0.201920
    PATENT                          6110     0.180238
    BLOG                            6028     0.177819
    REPORT_LABO                     5205     0.153542
    VIDEO                           3965     0.116963
    REPORT_MAST                     3413     0.100680
    LECTURE                         3036     0.089559
    REPORT_LPRO                     2747     0.081033
    REPORT_LICE                     2701     0.079676
    TRAD                            1810     0.053393
    SOFTWARE                         879     0.025930
    PRESCONF                         832     0.024543
    CREPORT                          808     0.023835
    REPORT_DOCT                      581     0.017139
    REPORT_ETAB                      491     0.014484
    MAP                              413     0.012183
    SON                              326     0.009617
    REPORT_FORM                      270     0.007965
    REPORT_GMAST                     222     0.006549
    OTHERREPORT                      164     0.004838
    NOTE                             145     0.004277
    SYNTHESE                         124     0.003658
    REPORT_FPROJ                     115     0.003392
    REPORT_GLICE                      91     0.002684
    REPACT                            70     0.002065
    ETABTHESE                         50     0.001475
    MEMLIC                            41     0.001209
    REPORT_RFOINT                     24     0.000708
    REPORT_COOR                       20     0.000590
    REPORT_RETABINT                   11     0.000324
    MANUAL                             1     0.000029
    DOUV                               0     0.000000
    

When analyzing the total number of documents in the HAL database, we find that the two most common types of documents are scientific articles and communications. This corresponds to the same results obtained for "Python" and "Jupyter Notebooks". About 70% of the documents in the open archive database are scientific articles or communications.

Our Jupyter Notebook is finished: hoping that you liked it and that it was clear!

If you have any questions or feedback, please write to me at my university email address: maxime.popineau@etu.univ-tours.fr.

[^1]: This internship was carried out within the framework of the Translitterae University Research School (ANR-10-IDEX 0001 02 PSL* and ANR 17 EURE 0025) with the financial support of CAPHÉS (UMS 3610, CNRS-ENS) and AOROC (UMR 8546, CNRS-ENS-EPHE).