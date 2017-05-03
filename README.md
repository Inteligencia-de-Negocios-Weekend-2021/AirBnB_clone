# AirBnB Clone
Recreation of the AirBnB site, from the back-end data management to the front-end user interface. Written in Python and MySQL.

<h4>Third Phase</h4>
Build an API to interface with the database. Current implmentation requires an existing database in mysql. 

Run the following at the root of the directory to start with example DataBase parameters.
```
>>> HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db HBNB_API_HOST=0.0.0.0 HBNB_API_PORT=5000 python3 -m api.v1.app
```
Expected response:
```
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
...
```
A list of all the possible routes and their respective routes are available on Flasgger's application, <a href="http://0.0.0.0:5000/apidocs/">here</a>. 

Input route for specific api request and available route below.

http://0.0.0.0:5000/api/v1/{Route}

| Route                                    | Request            |
|------------------------------------------|--------------------|
| states                                   | [GET, POST]        |
| states/<state_id>                        | [GET, DELETE, PUT] |
| states/<state_id>/cities                 | [GET, POST]        |
| cities/<city_id>                         | [GET, DELETE. PUT] |
| amenities                                | [GET, POST]        |
| amenities/<amenity_ids>                  | [GET, DELETE, PUT] |
| users                                    | [GET, POST]        |
| users/<user_id>                          | [GET, DELETE, PUT  |
| cities/<city_id>/places                  | [GET, POST]        |
| places/<place_id>                        | [GET, DELETE, PUT] |
| places/<place_id>/amenities              | [GET, DELETE]      |
| places/<place_id>/amenities/<amenity_id> | [POST]             |
| places/<place_id>/reviews                | [GET, POST]        |
| reviews/<review_id>                      | [GET, DELETE, PUT] |
| places                                   | [POST]             |


<h4>second phase</h4>
Command line interpretor can now save objects into a mysql database by setting the following environmental variables. The database schema is <a href="https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/289/AirBnb_DB_diagramm.jpg">here</a> and below.
<img src="https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/289/AirBnb_DB_diagramm.jpg" alt="HBnB Class Relationship">

* MySQL user: ``HBNB_MYSQL_USER=hbnb_dev``
* MySQL password: ``HBNB_MYSQL_PWD=hbnb_dev_pwd``
* MySQL host: ``HBNB_MYSQL_HOST=localhost``
* MySQL database:  ``HBNB_MYSQL_DB=hbnb_dev_db``
* Storage type: ``HBNB_TYPE_STORAGE=db`` -- db is the only variable here. Any other option (including not set) will default to the storage type as a json object.

### First Phase
Where create a command line interpretor to access objects that will store user data. Users can use the console to create objects, update object attributes, remove objects, list all objects, and store and read data from a .json file. 


In order to begin the console, you can run either 'python3 console.py' or './console.py' in the command line.

Classes that are currently supported include BaseModel, User, City, State, Amenity, Review, and Place.

The console currently supports the following commands:
- **create \<class name>**, which will create an object of the class declared by user;
- **show \<class name> \<id>**, which will display the object information if it exists;
- **destroy \<class name> \<id>**, which will delete the object if it exists;
- **all \<class name>**, where the class name input is optional and the console will display all instances, or all instances of a specified object;
- **update \<class name> \<id> \<attribute name> \<attribute value>**, whilch will update an instance attribute of a previously declared object.

Additionally, the console also supports the following command formats:
- **\<class name>.all()**, which will display all instances of the specified class;
- **\<class name>.count()**, whilch will display the number of instances of the specified class;
- **\<class name>.show(\<id>)**, whilch will display the instance with correct id and class;
- **\<class name>.destroy(\<id>)**, which will delete the instance with correct id and class;
- **\<class name>.update(\<id>, \<attribute name>, \<attribute value>)**, which will update an instance of the given class and id with the new attribute;
- **\<class name>.update(\<id>, \<dictionary representation>)**, which will update an instance of the given class and id with a dictionary of key value pairs that will be new attributes for the objects. 
- **\<class name>.create(<key>=<value>) create an instance of the class





## Install Dependencies 

<h6>1. Install MySql</h6>

1. ``MYSQL_APT=mysql-apt-config_0.8.3-1_all.deb``
2. ``wget https://dev.mysql.com/get/$MYSQL_APT``
3. ``sudo dpkg -i $MYSQL_APT``
4. ``sudo apt-get update``
5. ``sudo apt-get -y install mysql-server``

<h6>2. Install python3 modules</h6>

1. ``sudo apt-get -y install python3-pip``
2. ``sudo apt-get -y install python3-dev libmysqlclient-dev``
3. ``sudo -H pip3 install mysqlclient sqlalchemy Flask pep8``

<h6>3. (Optional) Fill the sql databases with example SQL data.</h6>
1. ``cat "100-dump.sql" | mysql -uroot -hlocalhost -p``
2. ``cat "10-dump.sql" | mysql -uroot -hlocalhost -p``
3. ``cat "7-states_list.sql" | mysql -uroot -hlocalhost -p``
4. ``cat "setup_mysql_dev.sql" | mysql -uroot -hlocalhost -p``
5. ``cat "setup_mysql_test.sql" | mysql -uroot -hlocalhost -p``

## Usage

### Types of interfaces

#### Through Python directly:

Example of Console Usage without a db:
```
~> python3
Python 3.4.3 (default, Nov 17 2016, 01:08:31) 
[GCC 4.8.4] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import models
>>> s = models.State()
>>> s.name = "Calveticus"
>>> models.storage.new(s)
>>> models.storage.save()
>>> models.storage.count("State")
1
>>> exit()
~>
```

Example of Python usage directly with a db
```
~> HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3
Python 3.4.3 (default, Nov 17 2016, 01:08:31) 
[GCC 4.8.4] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import models
>>> models.storage.count("State")
58
>>> exit()
~>
```

#### The Console
``console.py`` -- Command line interface to directly interact with databases, or object methods.
In order to begin the console, you can run either ``python3 console.py`` or ``./console.py`` in the command line.

The console currently supports the following commands:
* ``create <class name>``, which will create an object of the class declared by user;
* ``show <class name> <id>``, which will display the object information if it exists;
* ``destroy <class name> <id>``, which will delete the object if it exists;
* ``all <class name>``, where the class name input is optional and the console will display all instances, or all instances of a specified object;
* ``update <class name> <id> <attribute name> <attribute value>``, whilch will update an instance attribute of a previously declared object.

Additionally, the console also supports the following command formats:
* ``<class name>.all()``, which will display all instances of the specified class;
* ``<class name>.count()``, whilch will display the number of instances of the specified class;
* ``<class name>.show(<id>)``, whilch will display the instance with correct id and class;
* ``<class name>.destroy(<id>)``, which will delete the instance with correct id and class;
* ``<class name>.update(<id>, <attribute name>, <attribute value>)``, which will update an instance of the given class and id with the new attribute;
* ``<class name>.update(<id>, <dictionary representation>)``, which will update an instance of the given class and id with a dictionary of key value pairs that will be new attributes for the objects. 
* ``<class name>.create(<key>=<value>)`` create an instance of the class

Classes that are currently supported include BaseModel, User, City, State, Amenity, Review, and Place.


#### API Access
API -- interaction with the objects through HTTP GET requests


The following is an example of the process to lookup objects with GET requests and create a new place object with a POST request


```
(bash)~> curl -X GET http://0.0.0.0:5000/api/v1/states
[
  {
    "__class__": "State", 
    "created_at": "2017-03-25T19:44:42", 
    "id": "421a55f4-7d82-47d9-b54c-a76916479547", 
    "name": "California", 
    "updated_at": "2017-03-25T19:44:42"
  }, 
  {
    "__class__": "State", 
    "created_at": "2017-03-25T19:44:42", 
    "id": "421a55f4-7d82-47d9-b54c-a76916479552", 
    "name": "Illinois", 
    "updated_at": "2017-03-25T19:44:42"
  }
]
(bash)~> curl -X GET http://0.0.0.0:5000/api/v1/states/421a55f4-7d82-47d9-b54c-a76916479552/cities
[
  {
    "__class__": "City", 
    "created_at": "2017-03-25T19:44:42", 
    "id": "531a55f4-7d82-47d9-b54c-a76916479554", 
    "name": "Baton rouge", 
    "state_id": "421a55f4-7d82-47d9-b54c-a76916479554", 
    "updated_at": "2017-03-25T19:44:42"
  }, 
  {
    "__class__": "City", 
    "created_at": "2017-03-25T19:44:42", 
    "id": "541a55f4-7d82-47d9-b54c-a76916479554", 
    "name": "Lafayette", 
    "state_id": "421a55f4-7d82-47d9-b54c-a76916479554", 
    "updated_at": "2017-03-25T19:44:42"
  }
]
curl -X GET http://0.0.0.0:5000/api/v1/cities/531a55f4-7d82-47d9-b54c-a76916479554/
{
  "__class__": "City", 
  "created_at": "2017-03-25T19:44:42", 
  "id": "531a55f4-7d82-47d9-b54c-a76916479554", 
  "name": "Baton rouge", 
  "state_id": "421a55f4-7d82-47d9-b54c-a76916479554", 
  "updated_at": "2017-03-25T19:44:42"
}
curl -X GET http://0.0.0.0:5000/api/v1/users
[
  {
    "__class__": "User", 
    "created_at": "2017-04-27T13:08:49", 
    "email": "foo@eve.com", 
    "first_name": "Eve", 
    "id": "12cabb5b-dcdb-4b6a-8988-5153c3a61da0", 
    "last_name": null, 
    "password": "flowers", 
    "updated_at": "2017-04-27T13:08:49"
  }
]

curl -X POST http://0.0.0.0:5000/api/v1/cities/531a55f4-7d82-47d9-b54c-a76916479554/places -H "Content-Type: application/json" -d '{ "user_id": "12cabb5b-dcdb-4b6a-8988-5153c3a61da0", "name": "Somewhere_strange" }'
{
  "__class__": "Place", 
  "created_at": "2017-04-28T02:57:52.308374", 
  "id": "1b916f53-7f97-445e-a266-36466c889fb6", 
  "name": "Somewhere_strange", 
  "user_id": "1e8e8a2e-7bc7-41b4-80b5-7bc9e907dccd"
}

```

#### Front End Webserver
* Front end -- Website to display 


## Sample tests on the command-line
Check to see if the count method works with the ``test_get_count.py`` script.
```
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db ./test_get_count.py
```

Simple preliminary tests to see if the Flask app runs.
```
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db HBNB_API_HOST=0.0.0.0 HBNB_API_PORT=5000 python3 -m api.v1.app



**Authors**
- **Philip Yoo**, \<philip.yoo@holbertonschool.com>, @philipYoo10
- **Jianqin Wang**, \<jianqin.wang@holbertonschool.com>, @jianqinwang94
- **Anne Cognet**, \<anne.cognet@holbertonschool.com>, @1million40
- **Richard Sim**, \<richard.sim@holbertonschool.com>, @rdsim8589
- **Ian Liu-Johnston**, \<ian.liu-johnson@holbertonschool.com>, @Concativerse

