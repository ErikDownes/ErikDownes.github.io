/*
SQL Bank Reconciliation Lab
Cashbook interview preparation
Target: Microsoft SQL Server

Goal:
1. Reconcile bank transactions to ledger entries.
2. Investigate exceptions.
3. Apply customer payments to invoices.
4. Build a collections view and reconciliation summary.

The tables and sample data are provided.
The reconciliation queries are intentionally left for Erik to write.
*/

DROP TABLE IF EXISTS invoices;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS ledger_entries;
DROP TABLE IF EXISTS bank_transactions;

CREATE TABLE bank_transactions (
    bank_id INT PRIMARY KEY,
    transaction_date DATE NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    payment_reference VARCHAR(40) NOT NULL,
    counterparty VARCHAR(80) NULL
);

CREATE TABLE ledger_entries (
    ledger_id INT PRIMARY KEY,
    posting_date DATE NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    payment_reference VARCHAR(40) NOT NULL,
    account_code VARCHAR(20) NOT NULL
);

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL
);

CREATE TABLE invoices (
    invoice_id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    invoice_number VARCHAR(30) NOT NULL,
    invoice_date DATE NOT NULL,
    due_date DATE NOT NULL,
    invoice_amount DECIMAL(12,2) NOT NULL,
    payment_reference VARCHAR(40) NOT NULL,
    CONSTRAINT fk_invoice_customer
        FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO bank_transactions
(bank_id, transaction_date, amount, payment_reference, counterparty)
VALUES
(1, '2026-09-28', 1250.00, 'INV-1001', 'Northstar Manufacturing'),
(2, '2026-09-29',  825.50, 'INV-1002', 'Greenline Components'),
(3, '2026-09-30', 2400.00, 'INV-1004', 'Atlantic Systems'),
(4, '2026-10-01',  500.00, 'UNKNOWN-77', 'Northstar Manufacturing'),
(5, '2026-10-01',  825.50, 'INV1002', 'Greenline Components'),
(6, '2026-10-02', 1500.00, 'INV-1005', 'Westport Engineering'),
(7, '2026-10-02', 1500.00, 'INV-1005', 'Westport Engineering');

INSERT INTO ledger_entries
(ledger_id, posting_date, amount, payment_reference, account_code)
VALUES
(101, '2026-09-28', 1250.00, 'INV-1001', 'AR-CASH'),
(102, '2026-09-29',  825.50, 'INV-1002', 'AR-CASH'),
(103, '2026-09-30', 2400.00, 'INV-1004', 'AR-CASH'),
(104, '2026-10-02', 1500.00, 'INV-1005', 'AR-CASH'),
(105, '2026-10-03',  500.00, 'INV-1003', 'AR-CASH');

INSERT INTO customers
(customer_id, customer_name)
VALUES
(1, 'Northstar Manufacturing'),
(2, 'Greenline Components'),
(3, 'Atlantic Systems'),
(4, 'Westport Engineering');

INSERT INTO invoices
(invoice_id, customer_id, invoice_number, invoice_date, due_date, invoice_amount, payment_reference)
VALUES
(1001, 1, 'INV-1001', '2026-09-01', '2026-10-01', 1250.00, 'INV-1001'),
(1002, 2, 'INV-1002', '2026-09-02', '2026-10-02',  825.50, 'INV-1002'),
(1003, 1, 'INV-1003', '2026-09-03', '2026-10-03',  500.00, 'INV-1003'),
(1004, 3, 'INV-1004', '2026-09-04', '2026-10-04', 2400.00, 'INV-1004'),
(1005, 4, 'INV-1005', '2026-09-05', '2026-10-05', 1500.00, 'INV-1005');

/* ---------------------------------------------------------
   CHECK THE RAW DATA
--------------------------------------------------------- */

SELECT * FROM bank_transactions ORDER BY transaction_date, bank_id;
SELECT * FROM ledger_entries ORDER BY posting_date, ledger_id;
SELECT * FROM customers ORDER BY customer_id;
SELECT * FROM invoices ORDER BY due_date;

/* ---------------------------------------------------------
   ERIK'S TASKS
---------------------------------------------------------

TASK 1
Write an INNER JOIN that finds exact matches using:
    bank_transactions.amount = ledger_entries.amount
AND bank_transactions.payment_reference = ledger_entries.payment_reference

TASK 2
Use a LEFT JOIN to return bank transactions with no exact match.

TASK 3
Investigate the deliberately messy rows:
- UNKNOWN-77
- INV1002 versus INV-1002
- duplicate INV-1005 bank rows

Do not automatically "fix" them until you can explain the control risk.

TASK 4
Join bank_transactions to invoices and calculate a payment status.

TASK 5
Create an unpaid / collections view using DATEDIFF.

TASK 6
Create a summary with:
- total transactions
- exact matches
- unmatched transactions
- matched value
- unmatched value
- match percentage

BONUS
Create a CTE called exact_matches and use it in the summary query.

BONUS 2
Create a candidate-match query where:
- amount matches; and
- transaction date is within +/- 3 days of posting date;
but the reference is not identical.

This should return POSSIBLE MATCHES for human review rather than treating them as definite.
--------------------------------------------------------- */
