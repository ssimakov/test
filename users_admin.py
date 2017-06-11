import sqlite3

import random

class UsersDataBase:
    
    def main(self):
        conn = sqlite3.connect('UsersData.sqlite')
        print 'database created'

        c = conn.cursor()

        c.execute('''CREATE TABLE users_1 (name varchar,password varchar)''')
        c.execute('''CREATE TABLE users_2 (name varchar,password varchar)''')

        for i in range(1,16):

            v = random.randint(1,10)

            c.execute('''INSERT INTO users_1 (name,password) VALUES
                         ('User_%i','%i3%i')'''%(i,random.randint(1,5),v))

        print 'table created'

        for i in range(1,11):

            v = random.randint(1,10)
            
            c.execute('''INSERT INTO users_2 (name,password) VALUES
                         ('User_%i','%i3%i')'''%(i,random.randint(1,5),v))

        print 'table created'

        name_1 = c.execute('SELECT name FROM users_1')
        data_1 = name_1.fetchall()
        print data_1

        name_2 = c.execute('SELECT name FROM users_2')
        data_2 = name_2.fetchall()
        print data_2

        if len(data_1) > len(data_2):

            for i in range(len(data_1)):

                if data_1[i] not in data_2:

                    newNameList = c.execute(''' SELECT * FROM users_1 WHERE name = '{x}' '''.format(x = data_1[i][0]))
                    data = newNameList.fetchall()

                    name,password = data[0][0],data[0][1]

                    c.execute(''' INSERT INTO users_2 (name,password) VALUES ('{_name}','{_password}') '''.format( _name = name, _password = password ))           

        elif len(data_1) < len(data_2):
           for i in range(len(data_2)):
                if data_2[i] not in data_1:
                    newNameList = c.execute(''' SELECT * FROM users_2 WHERE name = '{x}' '''.format(x = data_2[i][0]))
                    data = newNameList.fetchall()
                    name,password = data[0][0],data[0][1]
                    c.execute(''' INSERT INTO users_1 (name,password) VALUES ('{_name}','{_password}') '''.format( _name = name, _password = password ))

        else:
            print 'The same'

        name_1 = c.execute('SELECT name FROM users_1')
        data_1 = name_1.fetchall()
        print data_1

        name_2 = c.execute('SELECT name FROM users_2')
        data_2 = name_2.fetchall()
        print data_2

        conn.commit()

        c.close()

        conn.close()

complie = UsersDataBase()

complie.main()