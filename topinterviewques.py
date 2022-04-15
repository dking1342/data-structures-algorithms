# Top interview questions

# Interview question 1- anagram using a hash table
def is_anagram(s1, s2):
    if len(s1) != len(s2):
        return False

    hash_table_s1 = explore_string(s1)
    hash_table_s2 = explore_string(s2)

    for key in hash_table_s1:
        if key not in hash_table_s2 or hash_table_s1[key] != hash_table_s2[key]:
            return False
    return True


def explore_string(string):
    freq = {}
    for char in string:
        if char in freq:
            freq[char] += 1
        else:
            freq[char] = 1
    return freq


# print(is_anagram("danger","garden"))

# Interview question 2- anagram using sorted
def is_anagram_sorted(s1, s2):
    if len(s1) != len(s2):
        return False

    alpha1 = alphabetize(s1)
    alpha2 = alphabetize(s2)

    return alpha1 == alpha2


def alphabetize(string):
    string_list = list(string)
    first_index = string_list.pop(0)
    queue = [first_index]

    while len(string_list) > 0:
        current = string_list[0]
        index = len(queue)
        for i in range(0, len(queue)):
            if current < queue[i]:
                index = i
                break

        queue.insert(index, current)
        string_list.pop(0)

    return "".join(queue)


# print(is_anagram_sorted("ab1dcef", "fc1ebda"))


# Interview question 3- first and last position
def first_and_last(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            start = i
            while (i + 1) < len(arr) and arr[i + 1] == target:
                i += 1
            return [start, i]
    return [-1, -1]


# print(first_and_last([2,4,5,5,5,5,5,7,9,9],5))


# Interview question 4- find first target value in an array
def find_first_target_binary_sort(arr, target):
    if arr[0] == target:
        return 0
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target and arr[mid - 1] < target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1


# print(find_first_target_binary_sort([2, 3, 4, 5, 5, 5, 5, 5, 7, 9, 9], 3))


# Interview question 5- find last target value in an array
def find_last_target_binary_sort(arr, target):
    if arr[-1] == target:
        return len(arr) - 1
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target and arr[mid + 1] > target:
            return mid
        elif arr[mid] > target:
            right = mid - 1
        else:
            left = mid + 1
    return -1


# print(find_last_target_binary_sort([2, 3, 4, 5, 5, 5, 5, 5, 7, 9, 9], 5))


# Interview question 6- find first and last target value in array using binary sort
def first_and_last_binary_search(arr, target):
    if len(arr) == 0 or arr[0] > target or arr[-1] < target:
        return [-1, -1]
    return [find_first_target_binary_sort(arr, target), find_last_target_binary_sort(arr, target)]


# print(first_and_last_binary_search([2, 3, 4, 5, 5, 5, 5, 5, 7, 9, 9], 5))


# Interview question 7- kth largest element
def kth_largest(arr, k):
    if k > len(arr):
        return -1
    sorted_arr = sort_nums(arr)
    return sorted_arr[-k]


def sort_nums(arr):
    first_index = arr.pop(0)
    queue = [first_index]

    while len(arr) > 0:
        current = arr.pop(0)
        index = len(queue)

        for i in range(0, len(queue)):
            if current < queue[i]:
                index = i
                break

        queue.insert(index, current)
    return queue


# print(kth_largest([3, 2, 6, 4, 5, 9, 7, 7, 1, 8, 0], 1))
# print(kth_largest([3, 2, 6, 4, 5, 9, 7, 7, 1, 8, 0], 9))
# print(kth_largest([3, 2, 6, 4, 5, 9, 7, 7, 1, 8, 0], 10))
# print(kth_largest([3, 2, 6, 4, 5, 9, 7, 7, 1, 8, 0], 13))


# Python tools

# create a list
# x = [num for num in range(10)] gives values from 0 to range - 1
# x = [i**2 for i in range(10) if i > 4] you can change the value of i and filter for values of i

# deleting
# x = [5, 3, 2, 5]
# del(x[1]) deletes the first index of x
# del(x) deletes the entire x list

# extend or concatenating
# x = [1, 2, 3, 4]
# y = [3, 5, 6, 7, 8]
# x.extend(y)

# remove the first item from an array
# x = [1, 2, 3, 2]
# x.remove(2)

# Maxheap
# Parent must be greater value than the children
# maxheap can be stored in an array
# [1,  2,  3,  4, 5,  6,  7, 8, 9, 10]
# [25, 16, 24, 5, 11, 19, 1, 2, 3, 5]
# Finding children #####
# left child = parent index * 2
# right child = parent index * 2 + 1
# Finding parent
# parent = child node / 2 and round down for unevens

# Operations- push(insert), peek(get max), pop(remove max)
# Push
# append to the last index of array
# compare with parent to see if child is greater or less than
# if greater then the float up to the parent and switch to the child

# Peek
# returns the value at heap[1]

# Pop
# Delete it
# Bubble down the item at index 1 to its proper position
# return the max

class MaxHeap:
    def __init__(self,items=[]):
        super().__init__()
        self.heap = [0]
        for item in items:
            self.heap.append(item)
            self.__floatUp(len(self.heap) - 1)

    def push(self,data):
        self.heap.append(data)
        self.__floatUp(len(self.heap) - 1)

    def peek(self):
        if self.heap[1]:
            return self.heap[1]
        else:
            return False

    def pop(self):
        if len(self.heap) > 2:
            self.__swap(1,len(self.heap) - 1)
            maximum = self.heap.pop()
            self.__bubbleDown(1)
        elif len(self.heap) == 2:
            maximum = self.heap.pop()
        else:
            maximum = False
        return maximum

    def __swap(self, i, j):
        self.heap[i], self.heap[j] = self.heap[j], self.heap[i]

    def __floatUp(self,index):
        parent = index//2
        if index <= 1:
            return
        elif self.heap[index] > self.heap[parent]:
            self.__swap(index,parent)
            self.__floatUp(parent)

    def __bubbleDown(self,index):
        left = index * 2
        right = index * 2 + 1
        largest = index
        if len(self.heap) > left and self.heap[largest] < self.heap[left]:
            largest = left
        if len(self.heap) > right and self.heap[largest] < self.heap[right]:
            largest = right
        if largest != index:
            self.__swap(index, largest)
            self.__bubbleDown(largest)

    def __str__(self):
        return str(self.heap)

print("***MaxHeap***")
m = MaxHeap([95, 3, 21])
m.push(10)
print(m)
print(m.pop())
print(m.peek())
print(m)


# Linked list
# every item is called a node
# Every node has two parts a data and pointer to the next node
# Attributes
# root- pointer to the beginning of the list
# size- number of nodes in the list

# Operations
# find(data)
# add(data)
# remove(data)
# print_list(data)

class Node:
    def __init__(self, d, n=None, p=None):
        self.data = d
        self.next_node = n
        self.prev_node = p

    def __str__(self):
        return ('(' + str(self.data) + ')')


class LinkedList:
    def __init__(self, r = None):
        self.root = r
        self.size = 0

    def add(self, d):
        new_node = Node(d,self.root)
        self.root = new_node
        self.size += 1

    def find(self, d):
        this_node = self.node
        while this_node is not None:
            if this_node.data == d:
                return d
            else:
                this_node = this_node.next_node
        return None

    def remove(self,d):
        this_node = self.root
        prev_node = None

        while this_node is not None:
            if this_node.data == d:
                if prev_node is not None:
                    prev_node.next_node = this_node.next_node
                else:
                    self.root = this_node.next_node
                self.size -= 1
                return True
            else:
                prev_node = this_node
                this_node = this_node.next_node
        return False

    def print_list(self):
        this_node = self.root
        while this_node is not None:
            print(str(this_node) + "->")

print("*** Linked List ***")
myList = LinkedList()
myList.add(5)
myList.add(8)
myList.add(12)
# myList.print_list()

print("size=" + str(myList.size))
myList.remove(8)
print("size=" + str(myList.size))
print(myList.find(5))
print(myList.root)


