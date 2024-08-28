import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import TruncatedSVD

def filter_courses_and_print_top_5(final):
    # Step 1: Read CSV File
    df = pd.read_csv("new.csv")

    # Step 2: Select Features
    features = ["Course Title", "Rating", "Level", "Duration to complete (Approx.)", "Keyword"]

    # Step 3: Create a column in DF which combines all selected features
    for feature in features:
        df[feature] = df[feature].fillna('')

    def combine_features(row):
        try:
            return row['Course Title'] + " " + row['Level'] + " " + row['Keyword']
        except Exception as e:
            print("Error in combining features:", e)
            return ''

    df["combined_features"] = df.apply(combine_features, axis=1)

    # Step 4: Apply Singular Value Decomposition (SVD)
    cv = CountVectorizer()
    count_matrix = cv.fit_transform(df["combined_features"])

    svd = TruncatedSVD(n_components=50, random_state=42)
    count_matrix_reduced = svd.fit_transform(count_matrix)

    # Step 8: Get user input
    # level_needed = input("Enter the level needed (e.g., Beginner, Intermediate, Advanced): ").strip().lower()
    # hours_available = int(input("Enter the number of hours available for study: "))
    # keywords = [keyword.strip().lower() for keyword in input("Enter keywords (separated by commas if multiple): ").split(',')]


    level_needed = final[0].strip().lower()
    hours_available = final[1]
    keywords = [keyword.strip().lower() for keyword in final[2].split(',')]


    # print("\nUser Input:")
    # print("Level Needed:", level_needed)
    # print("Hours Available:", hours_available)
    # print("Keywords:", keywords)

    # Step 9: Filter courses based on user input
    filtered_indices = []
    for i, row in df.iterrows():
        if row['Level'].lower() == level_needed and float(row['Duration to complete (Approx.)']) <= hours_available and all(keyword.strip().lower() in row['Keyword'].lower() for keyword in keywords):
            filtered_indices.append(i)

    recommended_courses = {}
    for idx in filtered_indices:
        score = sum(count_matrix_reduced[idx])
        recommended_courses[idx] = score
    # Step 8: Sort recommended courses based on score and print top 5
    recommended_courses = dict(sorted(recommended_courses.items(), key=lambda item: item[1], reverse=True)[:5])
    
    # Print top 5 courses along with their titles and URLs
    #print("\nTop 5 Courses:")
    #for idx in arr:
     #   print("Course Title:", df.loc[idx, 'Course Title'])
      #  print("URL:", df.loc[idx, 'Course Url'])
    #return arr

    top_5_courses = []

    # Add top 5 courses along with their titles and URLs to the 2D array
    for idx, score in recommended_courses.items():
        course_info = [df.loc[idx, 'Course Title'], df.loc[idx, 'Course Url'],''.join(list(str(df.loc[idx, 'Rating']))),df.loc[idx, 'Instructor'],df.loc[idx, 'Offered By'],''.join(list(str(df.loc[idx, 'Number of Review'])))]
        top_5_courses.append(course_info)
    # print(top_5_courses)
    return top_5_courses
# filter_courses_and_print_top_5(["Beginner level",15,"Arts and Humanities"])
