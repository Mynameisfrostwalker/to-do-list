import { isToday, isThisWeek } from "date-fns";
import { sortTasks } from './formInputs.js'
import _ from 'lodash';

const dates = (
    function() {
        let Today = [];
        let ThisWeek = [];
        const create = () => {
            for (const elem in sortTasks.projectsHolder) {
                for (let i = 0; i < sortTasks.projectsHolder[elem].length; i++) {
                    if (isToday(new Date(sortTasks.projectsHolder[elem][i].get.DueDate())) && elem !== "Today" && elem !== 'This Week') {
                        Today.push(sortTasks.projectsHolder[elem][i])
                    }
                    if (isThisWeek(new Date(sortTasks.projectsHolder[elem][i].get.DueDate())) && elem !== "Today" && elem !== 'This Week') {
                        ThisWeek.push(sortTasks.projectsHolder[elem][i])
                    }
                }
            }
            sortTasks.projectsHolder['Today'] = [...Today];
            sortTasks.projectsHolder['This Week'] = [...ThisWeek];
        }

        const clear = () => {
            _.pullAll(Today, [...Today]);
            _.pullAll(ThisWeek, [...ThisWeek]);
        }
        return { create, clear }
    }
)()

export { dates }