/// creates node
class Node { 
  constructor(element) { 
        this.element = element; 
        this.next = null
    } 
} 
  /// Linked list class and helper functions
class LinkedList { 
    constructor() { 
        this.head = null; 
        this.size = 0; 
    } 
  // adds to end
	addElement(element) { 
		// creates a new node 
		var node = new Node(element); 
	  
		// to store current node 
		var current; 
	  
		// if list is Empty add the 
		// element and make it head 
		if (this.head == null) 
			this.head = node; 
		else { 
			current = this.head; 
			  // iterate to the end of the 
			// list 
			while (current.next) { 
				current = current.next; 
			} 
			  // add node 
			current.next = node; 
		} 
		this.size++; 
   } 
    // insertAt location  
	insertAt(element, index) { 
    if (index > 0 && index > this.size) 
        return false; 
		else { 
			// creates a new node 
			var node = new Node(element); 
			var curr, prev; 
	  
			curr = this.head; 
	  
			// add the element to the 
			// first index 
			if (index == 0) { 
				node.next = head; 
				this.head = node; 
			} else { 
				curr = this.head; 
				var it = 0; 
	  
				// iterate over the list to find 
				// the position to insert 
				while (it < index) { 
					it++; 
					prev = curr; 
					curr = curr.next; 
				} 
	  
				// adding an element 
				node.next = curr; 
				prev.next = node; 
			} 
			this.size++; 
		} 
	} 
    // removeFrom location
	removeFrom(index) { 
    if (index > 0 && index > this.size) 
        return -1; 
    else { 
        var curr, prev, it = 0; 
        curr = this.head; 
        prev = curr; 
  
        // deleting first element 
        if (index === 0) { 
            this.head = curr.next; 
        } else { 
            // iterate over the list to the 
            // position to remove an element 
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
  
            // remove the element 
            prev.next = curr.next; 
        } 
        this.size--; 
  
        // return the remove element 
        return curr.element; 
    } 
  } 
    //find and remove removeElement element from Linked List
	removeElement(element) { 
		var current = this.head; 
		var prev = null; 
	  
		// iterate over the list 
		while (current != null) { 
			// comparing element with current 
			// element if found then remove the 
			// and return true 
			if (current.element === element) { 
				if (prev == null) { 
					this.head = current.next; 
				} else { 
					prev.next = current.next; 
				} 
				this.size--; 
				return current.element; 
			} 
			prev = current; 
			current = current.next; 
		} 
		return -1; 
		} 
	// Helper Methods 
	indexOf(element) { 
		var count = 0; 
		var current = this.head; 
	  
		// iterae over the list 
		while (current != null) { 
			// compare each element of the list 
			// with given element 
			if (current.element === element) 
				return count; 
			count++; 
			current = current.next; 
		} 
		// not found 
		return -1; 
	} 
    // isEmpty 
	isEmpty() { 
		return this.size == 0; 
	} 
    // size_Of_List 
	size_of_list() { 
		console.log(this.size); 
	}
    // PrintList 
	printList() { 
		var curr = this.head; 
		var str = ""; 
		while (curr) { 
			str += curr.element + " "; 
			curr = curr.next; 
		} 
		console.log(str); 
	} 
	//move last element to front
	moveRearElementToFront(){
      if(this.isEmpty())  
        return; 
		  var secLast = null; 
		  var last = this.head; 
		  while (last.next != null) { 
			  secLast = last; 
			  last = last.next;  
		  } 
		  /* Set the next of second last as null */
		  secLast.next = null; 
		  /* Set the next of last as head */
		  last.next = this.head; 
		  /* Change head to point to last node. */
		  this.head = last; 
	 }
	//move K last element to front
	moveKElementsFronRearToFront(k){
	   while(k){
		  this.moveRearElementToFront();
		  k--;
	   }
	  
	   this.printList();
	 }

} 

