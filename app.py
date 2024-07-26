
from flask import Flask, render_template, request, redirect, url_for
import mysql.connector

app = Flask(__name__)

# MySQL Connection
mydb = mysql.connector.connect(
    host= "localhost",
    user="root" ,
    password="" ,  # if no password is set for root in your MySQL setup
    database="expenses_db"

)
cursor = mydb.cursor()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_expense', methods=['POST'])
def add_expense():
    date = request.form['date']
    category = request.form['category']
    description = request.form['description']
    amount = float(request.form['amount'])

    # Insert into MySQL
    sql = "INSERT INTO expenses (date, category, description, amount) VALUES (%s, %s, %s, %s)"
    values = (date, category, description, amount)
    cursor.execute(sql, values)
    mydb.commit()

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)