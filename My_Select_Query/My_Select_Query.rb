class MySelectQuery
    def initialize(csv_content)
        @data = csv_content.strip.split("\n")
        @headers = @data[0].split(",")
        @rows = @data[1..-1]
    end

    def where(column_name, criteria)
        column_index = @headers.index(column_name)
        results = []
        @rows.each do |row|
            if row.split(",")[column_index] == criteria
                results << row
            end
        end
        results
    end
end
