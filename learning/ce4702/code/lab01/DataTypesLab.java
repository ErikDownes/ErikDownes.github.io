public class DataTypesLab {

    private static final int PASS_MARK = 40;

    public static void main(String[] args) {
        System.out.println("CE4702 Lab 01 — Data types are contracts");

        String rawCsv = "1001,12,87";
        System.out.println("Raw CSV: " + rawCsv);

        int[] record = parseRecord(rawCsv);
        int id = record[0];
        int attendance = record[1];
        int score = record[2];

        System.out.println("ID: " + id);
        System.out.println("Attendance: " + attendance);
        System.out.println("Score: " + score);

        boolean passed = score >= PASS_MARK;
        System.out.println("Passed threshold " + PASS_MARK + ": " + passed);

        double average = (attendance + score) / 2.0;
        System.out.printf("Average of %d and %d: %.2f%n", attendance, score, average);

        try {
            parseRecord("1002,twelve,70");
            throw new AssertionError("Invalid attendance should have been rejected");
        } catch (IllegalArgumentException ex) {
            System.out.println("Rejected invalid record: attendance must be an integer");
        }

        selfCheck();
        System.out.println("All self-checks passed.");
    }

    static int[] parseRecord(String csvLine) {
        String[] fields = csvLine.split(",");

        if (fields.length != 3) {
            throw new IllegalArgumentException("Expected exactly 3 fields");
        }

        int id = parseInteger(fields[0], "id");
        int attendance = parseInteger(fields[1], "attendance");
        int score = parseInteger(fields[2], "score");

        validateRange(attendance, 0, 30, "attendance");
        validateRange(score, 0, 100, "score");

        return new int[] { id, attendance, score };
    }

    static int parseInteger(String text, String fieldName) {
        try {
            return Integer.parseInt(text.trim());
        } catch (NumberFormatException ex) {
            throw new IllegalArgumentException(fieldName + " must be an integer", ex);
        }
    }

    static void validateRange(int value, int min, int max, String fieldName) {
        if (value < min || value > max) {
            throw new IllegalArgumentException(
                fieldName + " must be between " + min + " and " + max
            );
        }
    }

    static void selfCheck() {
        int[] record = parseRecord("2001,0,40");

        assertEquals(2001, record[0], "ID");
        assertEquals(0, record[1], "attendance");
        assertEquals(40, record[2], "score");

        expectFailure("2002,31,80", "attendance range");
        expectFailure("2003,20,101", "score range");
        expectFailure("2004,20", "field count");
    }

    static void expectFailure(String csv, String testName) {
        try {
            parseRecord(csv);
            throw new AssertionError(testName + " should have failed");
        } catch (IllegalArgumentException expected) {
            // Passing test: invalid data was rejected.
        }
    }

    static void assertEquals(int expected, int actual, String testName) {
        if (expected != actual) {
            throw new AssertionError(
                testName + " expected " + expected + " but got " + actual
            );
        }
    }
}
