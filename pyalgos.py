"""
    Interview questions
    What are algorithms?
    Procedure or formula for solving a problem
    Some are useful and used repetitively that they are given specific names
 """
from random import randint

"""
Big O Overview
1       Constant    Good
log(n)  Logarithmic Good
n       Linear      Fair
nlog(n) Log Linear  Bad
n^2     Quadratic   Horrible
n^3     Cubic       Horrible
2^n     Exponential Horrible
"""


# Interview question 1
def sum1(n):
    final_sum = 0
    for x in range(n + 1):
        final_sum += x
    return final_sum
print(f"Interview Question 1 Answer: {sum1(5)}")

# Interview question 2
def sum2(n):
    return (n*(n+1))/2
print(f"Interview Question 2 Answer: {sum2(5)}")

"""
The better algorithm depends on the big O notation. This is because hardware can skew the time it takes to 
complete the task. 

sum1 is O(n+1) but the 1 drops off like in limits to make it a O(n) notation
"""

# Interview question 3
def Bigo(n):
    return 45*n**3 + 20 *n**2 + 19
print(f"Interview Question 3 Answer: {Bigo(1)}")
print(f"Interview Question 3 Answer: {Bigo(2)}")
print(f"Interview Question 3 Answer: {Bigo(10)}")

"""
This function will have a O(n**3) notation since this part of the algorithm has the highest impact. This is a 
bad notation.
"""

# Interview question 4 - Example of O(1) notation - Constant
def func_constant(values):
    return values[0]
print(f"Interview Question 4 Answer {func_constant([1,2,3])}")


# Interview question 5 - Example of O(n) notation - Linear
def func_lin(lst):
    for val in lst:
        print(val)
print("Interview Question 5 Answer...")
func_lin([1,2,3])

# Interview question 6 - Example of O(n^2) - Quadratic
def func_quad(lst):
    for item_1 in lst:
        for item_2 in lst:
            print(item_1,item_2)
print("Interview Question 6 Answer...")
func_quad([1,2,3])

# Interview question 7 - O(n) notation - Linear
def print_once(lst):
    for val in lst:
        print(val)
print("Interview Question 7 Answer...")
print_once([1,2,3])

# Interview question 8 - O(3n) or O(n) - Linear
def print_3(lst):
    for val in lst:
        print(val)
    for val in lst:
        print(val)
    for val in lst:
        print(val)
print("Interview Question 8 Answer...")
print_3([1,2,3])

# Interview question 9 - O(1 + n/2 + 10) -> O(n) - Linear
def comp(lst):
    print(lst[0])
    midpoint = len(lst)//2

    for val in lst[:midpoint]:
        print(val)

    for x in range(10):
        print('number')
print("Interview Question 9 Answer...")
comp([1,2,3,4,5,6,7,8,9])

# Interview question 10 - O(1) best case / O(n) worst case
def matcher(lst,match):
    for item in lst:
        if item == match:
            return True
    return False
print(f"Interview Question 10 Answer: {matcher([1,2,3,4,5],3)}")
print(f"Interview Question 10 Answer: {matcher([1,2,3,4,5],20)}")

# Interview question 11 - differences in time and space complexity
def memory(n=10):
    for x in range(n): # time complexity O(n)
        print("Memory!") # space complexity O(1)
print("Interview Question 11 Answer...")
memory(2)

# Interview question 12 - checking the size in bytes
import sys
print("Interview Question 12 Answer...")
n=10
data=[]
for i in range(n):
    a = len(data)
    b = sys.getsizeof(data)

    print("Length: {0:3d}; Size in bytes: {1:4d} ".format(a, b))
    data.append(n)

# Interview question 13
def anagram(s1,s2):
    s1=s1.replace(" ","").lower()
    s2=s2.replace(" ","").lower()

    return sorted(s1) == sorted(s2)
print(f"Interview Question 13 Answer: {anagram('dog','god')}")
print(f"Interview Question 13 Answer: {anagram('clint eastwood','old west action')}")
print(f"Interview Question 13 Answer: {anagram('aa','bb')}")

# Interview question 14
def anagram2(s1,s2):
    s1=s1.replace(" ","").lower()
    s2=s2.replace(" ","").lower()

    if len(s1) != len(s2):
        return False
    count = {}

    for letter in s1:
        if letter in count:
            count[letter] += 1
        else:
            count[letter] = 1

    for letter in s2:
        if letter in count:
            count[letter] -= 1
        else:
            count[letter] = 1

    for k in count:
        if count[k] != 0:
            return False

    return True

print(f"Interview Question 14 Answer: {anagram2('dog','god')}")
print(f"Interview Question 14 Answer: {anagram2('clint eastwood','old west action')}")
print(f"Interview Question 14 Answer: {anagram2('aa','bb')}")

# Interview question 15
def pair_sum(arr,k):
    if len(arr) < 2:
        return print("Too small")

    seen = set()
    output = set()

    for num in arr:
        target = k - num

        if target not in seen:
            seen.add(num)

        else:
            output.add((min(num,target),max(num,target)))

    print('\n'.join(map(str,list(output))))

print("Interview Question 15 Answer...")
pair_sum([1,3,2,2],4)

# Interview question 16
def largest_sum(arr):
    if len(arr) == 0:
        return print("Too small")

    max_sum = current_sum = arr[0]

    for num in arr[1:]:
        current_sum = max(current_sum + num,num)
        max_sum = max(current_sum, max_sum)

    return max_sum

print(f"Interview Question 16 Answer: {largest_sum([7,1,2,-1,3,4,10,-12,3,21,-19])}")

# Interview question 17
def reverse_str(str):
    return " ".join(reversed(str.split())) # reversed is used for objects
print(f"Interview Question 17 Answer: {reverse_str('This is a dog')}")

def reverse_str2(str):
    return "*".join(str.split()[::-1])
print(f"Interview Question 17 Answer: {reverse_str2('This is a dog')}")

def reverse_str3(str):
    length = len(str)
    spaces = [' ']
    words = []
    i = 0

    while i < length:
        if str[i] not in spaces:
            word_start = i

            while i < length and str[i] not in spaces:
                i += 1

            words.append(str[word_start:i])
        i += 1
    return "".join(reversed(str))

print(f"Interview Question 17 Answer: {reverse_str3('This is a cat')}")

def reverse_str4(str):
    split_str = str.split()
    length = len(split_str)
    word = ""

    while length - 1 >= 0:
        word += split_str[length - 1]
        word += " "
        length -= 1

    return word

print(f"Interview Question 17 Answer: {reverse_str4('This is a giraffe')}")

def reverse_str5(str):
    sentence = ""
    i = len(str) - 1

    while i >= 0:
        sentence += str[i]
        i -= 1

    return sentence

print(f"Interview Question 17 Answer: {reverse_str5('This is a donkey')}")

def reverse_str6(str):
    return " ".join(str.split()[::-1])

print(f"Interview Question 17 Answer: {reverse_str6('This is a snake')}")


# Interview question 18
def rotation(list1, list2):
    if len(list1) != len(list2):
        return False

    key = list1[0]
    key_index = 0

    for i in range(len(list2)):
        if list2[i] == key:
            key_index = i
            break

    if key_index == 0:
        return False

    for x in range(len(list1)):
        list_2_index = (key_index + x) % len(list1)

        if list1[x] != list2[list_2_index]:
            return False

    return True

print(f"Interview Question 18 Answer: {rotation([1,2,3,4,5,6,7],[4,5,6,7,1,2,3])}")


# Interview question 19
def common_elements(list1, list2):
    pointer_one = 0
    pointer_two = 0

    result = []

    while pointer_one < len(list1) and pointer_two < len(list2):
        if list1[pointer_one] == list2[pointer_two]:
            result.append(list1[pointer_one])
            pointer_one += 1
            pointer_two += 2

        elif list1[pointer_one] > list2[pointer_two]:
            pointer_two += 1

        else:
            pointer_one += 1

    return result

print(f"Interview Question 19 Answer: {common_elements([9,1,3,6,7,4],[1,2,4,5,9,10])}")


def common_elements2(list1, list2):
    common_arr = []

    for i in range(len(list1)):
        for j in range(len(list2)):
            if list1[i] == list2[j] and list1[i] not in common_arr:
                if len(common_arr) == 0:
                    common_arr.append(list1[i])

                else:
                    for h in range(len(common_arr)):
                        if list1[i] < common_arr[h]:
                            common_arr.insert(h,list1[i])
                            break
                        elif h == len(common_arr) - 1:
                            common_arr.append(list1[i])

    return common_arr

print(f"Interview Question 19 Answer: {common_elements2([4,1,1,9,3,6,10,7,9],[1,2,4,5,9,10])}")


# Interview question 20
def mine_sweeper(bombs,num_rows,num_cols):
    field = [[0 for i in range(num_cols)] for j in range(num_rows)]

    for bomb_location in bombs:
        (bomb_row, bomb_col) = bomb_location
        field[bomb_row][bomb_col] = -1

        row_range = range(bomb_row - 1, bomb_row + 2)
        col_range = range(bomb_col - 1, bomb_col + 2)

        for i in row_range:
            for j in col_range:
                if (0 <= i < num_rows and 0 <= j < num_cols and field[i][j] != -1):
                    field[i][j] += 1

    return field


print(f"Interview Question 20 Answer: {mine_sweeper([[0,0],[1,2],[2,2]],5,5)}")


def mine_sweeper2(bombs, num_rows, num_cols):
    if bombs >= num_rows * num_cols:
        return "Too many bombs"

    bomb_list = []
    bomb = 0

    while bomb < bombs:
        random_row = randint(0, num_rows - 1)
        random_col = randint(0, num_cols - 1)

        if [random_row, random_col] not in bomb_list:
            bomb_list.append([random_row, random_col])
            bomb += 1

    field = [[0 for i in range(num_cols)] for j in range(num_rows)]

    for bomb_location in bomb_list:
        (bomb_row, bomb_col) = bomb_location
        field[bomb_row][bomb_col] = -1

        row_range = range(bomb_row - 1, bomb_row + 2)
        col_range = range(bomb_col - 1, bomb_col + 2)

        for i in row_range:
            for j in col_range:
                if (0 <= i < num_rows and 0 <= j < num_cols and field[i][j] != -1):
                    field[i][j] += 1

    return field


print(f"Interview Question 20 Answer: {mine_sweeper2(5, 3, 4)}")

# Interview question 21
def most_frequent(list):
    count = {}
    max_count = 0
    max_item = None

    for i in list:
        if i not in count:
            count[i] = 1
        else:
            count[i] += 1

        if count[i] > max_count:
            max_count = count[i]
            max_item = i

    return max_item

print(f"Interview Question 21 Answer: {most_frequent([1,1,2,2,2,3,4,5,6,6,6,6,6,1,1,1,1,])}")
print(f"Interview Question 21 Answer: {most_frequent(['orange','orange','berry','banana','orange'])}")


# Interview question 22
def unique(string):
    string = string.replace(' ', '')
    return len(set(string)) == len(string)


print(f"Interview Question 22 Answer: {unique('a b cdef')}")

def unique2(string):
    string = string.replace(' ','')
    chars = set()

    for letter in string:
        if letter in chars:
            return False
        else:
            chars.add(letter)

    return True

print(f"Interview Question 22 Answer: {unique2('a bb cdef')}")

# Interview question 23
def non_repeating(string):
    string = string.replace(' ', '').lower()
    char_count = {}
    unique_chars = ""

    for char in string:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1

    for char in string:
        if char_count[char] == 1:
            unique_chars += char

    print(f"Interview Question 23 Answer: {unique_chars}")

    all_uniques = []
    sort = sorted(char_count.items(), key=lambda x: x[1])

    for item in sort:
        if item[1] == sort[0][1]:
            all_uniques.append(item)

    return all_uniques


print(f"Interview Question 23 Answer: {non_repeating('I Appled Ape Peels')}")

