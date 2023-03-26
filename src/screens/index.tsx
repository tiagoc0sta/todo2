import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Empty } from '../components/Empty';
import { Header } from '../components/Header';
import { Task } from '../components/Task';
import { TaskDTO } from '../dtos/TaskDTO';
import { styles } from './styles';

export function HomeScreen() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>0</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluidas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>0</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(tasks) => tasks.id!}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              isCompleted={item.isCompleted}
              title={item.title}
            />
          )}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </View>
  );
}
