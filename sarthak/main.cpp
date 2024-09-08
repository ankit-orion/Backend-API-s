#include <iostream>
using namespace std;
void reverse(string &n) {
    int start = 0;
    int end = n.length() - 1;
    while (start < end) {
        swap(n[start], n[end]);
        start++;
        end--;
    }
}
int main() {
    string s;
    cout << "Enter a string: ";
    cin >> s;
    reverse(s);
    cout << s;
    return 0;
}
// array - [1, 2, 3, 4, 5]
// string - "Hello"
